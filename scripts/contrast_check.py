"""Check WCAG contrast for every text pairing across all four theme combos."""


def hexrgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def blend(fg_rgba, bg):
    """Composite an rgba foreground over an opaque background."""
    r, g, b, a = fg_rgba
    return tuple(round(c * a + bgc * (1 - a)) for c, bgc in zip((r, g, b), bg))


def lum(rgb):
    def ch(c):
        c = c / 255
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


THEMES = {
    'light': {
        'paper': '#f0eee9', 'ink': '#14110f', 'ink_soft': '#3a3532',
        'ink_mute': '#7d766f', 'sand': '#e5d9c3', 'band': '#14110f',
        'on_band': (240, 238, 233, 1.0), 'on_band_soft': (240, 238, 233, 0.72),
        'on_band_mute': (240, 238, 233, 0.55),
    },
    'dark': {
        'paper': '#131211', 'ink': '#ece8e1', 'ink_soft': '#b8b1a8',
        'ink_mute': '#8a827a', 'sand': '#241f1b', 'band': '#1c1917',
        'on_band': (236, 232, 225, 1.0), 'on_band_soft': (236, 232, 225, 0.72),
        'on_band_mute': (236, 232, 225, 0.55),
    },
}

ACCENTS = {
    ('light', 'crimson'): ('#d01b2c', '#f0eee9'),
    ('light', 'lime'): ('#c9f227', '#14110f'),
    ('dark', 'crimson'): ('#f03b4c', '#131211'),
    ('dark', 'lime'): ('#c9f227', '#14110f'),
}

LARGE = 3.0   # >=24px or >=18.66px bold
BODY = 4.5

fails = []
for theme in ('light', 'dark'):
    for accent_name in ('crimson', 'lime'):
        T = THEMES[theme]
        acc_hex, acc_ink_hex = ACCENTS[(theme, accent_name)]
        paper, ink = hexrgb(T['paper']), hexrgb(T['ink'])
        band = hexrgb(T['band'])
        acc, acc_ink = hexrgb(acc_hex), hexrgb(acc_ink_hex)

        checks = [
            ('body text on page', ink, paper, BODY),
            ('soft text on page', hexrgb(T['ink_soft']), paper, BODY),
            ('mute label on page', hexrgb(T['ink_mute']), paper, LARGE),
            ('text on sand card', ink, hexrgb(T['sand']), BODY),
            ('band text', blend(T['on_band'], band), band, BODY),
            ('band soft text', blend(T['on_band_soft'], band), band, BODY),
            ('band mute text', blend(T['on_band_mute'], band), band, LARGE),
            ('accent fill button', acc_ink, acc, BODY),
            ('accent heading on band', acc, band, LARGE),
            ('accent eyebrow on band', acc, band, LARGE),
            ('filled tag text', paper, ink, BODY),
        ]

        print(f'--- {theme} & {accent_name} ---')
        for label, fg, bg, need in checks:
            r = ratio(fg, bg)
            ok = r >= need
            flag = 'ok  ' if ok else 'FAIL'
            print(f'  {flag} {r:5.2f} (need {need}) {label}')
            if not ok:
                fails.append((theme, accent_name, label, round(r, 2), need))
        print()

print('=' * 52)
if fails:
    print(f'{len(fails)} FAILURES:')
    for f in fails:
        print('  ', f)
else:
    print('All pairings pass WCAG AA in all four combinations.')
