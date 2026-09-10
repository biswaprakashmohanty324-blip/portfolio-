import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/tokens';
import { profileData } from '../data/portfolioData';

export const SpecSheet: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headerStrip}>
        <Text style={styles.headerCode}>// SYSTEM_SPECIFICATIONS</Text>
        <Text style={styles.headerMeta}>ARCH: ARM64/X86_64</Text>
      </View>

      <View style={styles.body}>
        {profileData.specs.map((spec: { label: string; value: string }, index: number) => (
          <View
            key={index}
            style={[
              styles.specRow,
              index !== profileData.specs.length - 1 && styles.specRowBorder,
            ]}
          >
            <Text style={styles.specLabel}>{spec.label}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.md,
    overflow: 'hidden',
  },
  headerStrip: {
    backgroundColor: theme.colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCode: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  headerMeta: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.tertiary,
    fontSize: 10,
  },
  body: {
    padding: theme.spacing.md,
  },
  specRow: {
    paddingVertical: 6,
  },
  specRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 65, 85, 0.4)',
  },
  specLabel: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  specValue: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 12,
    fontWeight: '400',
  },
});
