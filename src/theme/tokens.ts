import { Platform } from 'react-native';

export const theme = {
  colors: {
    // Brand & Focus Accents
    primary: '#D97706',
    primaryHover: '#B45309',
    primaryLight: '#FBBF24',
    primaryMuted: 'rgba(217, 119, 6, 0.15)',

    // Structural Base Inks
    secondary: '#0F172A',
    tertiary: '#475569',
    neutral: '#FAFAF9',
    neutralMuted: '#94A3B8',
    neutralSubtle: '#64748B',

    // Surface Elevations
    surfaceCanvas: '#0F172A',
    surfaceSubtle: '#1E293B',
    surfaceElevated: '#334155',
    surfaceDeep: '#0C0F0E',

    // Structural Borders
    borderStructural: '#334155',
    borderProminent: '#64748B',
    borderActive: '#D97706',

    // Operational Status
    statusSuccess: '#059669',
    statusWarning: '#D97706',
    statusError: '#DC2626',
  },

  fonts: {
    sans: Platform.select({
      web: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      default: 'System',
    }),
    mono: Platform.select({
      web: 'JetBrains Mono, monospace',
      default: 'monospace',
    }),
  },

  typography: {
    headlineXl: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
      letterSpacing: -0.5,
    },
    headlineLg: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 32,
      letterSpacing: -0.3,
    },
    headlineSm: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 24,
      letterSpacing: -0.2,
    },
    bodyLg: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodyMd: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    bodySm: {
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 18,
    },
    labelCode: {
      fontSize: 13,
      fontWeight: '500' as const,
      lineHeight: 18,
      letterSpacing: 0.3,
    },
    labelTag: {
      fontSize: 11,
      fontWeight: '500' as const,
      lineHeight: 14,
      letterSpacing: 0.4,
    },
    labelMeta: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
  },

  spacing: {
    '2xs': 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  radii: {
    sm: 4,
    md: 8,
    lg: 12,
  },

  shadows: {
    hard: Platform.select({
      web: {
        boxShadow: '2px 2px 0px 0px #000000',
      },
      default: {
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 2,
      },
    }),
    hardLg: Platform.select({
      web: {
        boxShadow: '4px 4px 0px 0px #000000',
      },
      default: {
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
      },
    }),
  },
};
