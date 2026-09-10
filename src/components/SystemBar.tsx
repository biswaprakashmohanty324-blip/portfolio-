import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { theme } from '../theme/tokens';
import { profileData } from '../data/portfolioData';

interface SystemBarProps {
  onNavigate: (section: string) => void;
}

export const SystemBar: React.FC<SystemBarProps> = ({ onNavigate }: SystemBarProps) => {
  const handleOpenResume = () => {
    Linking.openURL('https://example.com/resume.pdf').catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {/* Identity & Status Beacon */}
        <View style={styles.identityContainer}>
          <Pressable onPress={() => onNavigate('hero')} style={styles.brandRow}>
            <Text style={styles.brandCode}>[BP]</Text>
            <Text style={styles.brandName}>{profileData.name.toUpperCase()}</Text>
            <Text style={styles.brandRole}>// {profileData.title.toUpperCase()}</Text>
          </Pressable>

          <View style={styles.statusChip}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>SYS: ACTIVE // READY</Text>
          </View>
        </View>

        {/* Navigation Action Links */}
        <View style={styles.navRow}>
          <Pressable onPress={() => onNavigate('projects')} style={styles.navLink}>
            <Text style={styles.navText}>PROJECTS</Text>
          </Pressable>
          <Pressable onPress={() => onNavigate('terminal')} style={styles.navLink}>
            <Text style={styles.navText}>TERMINAL</Text>
          </Pressable>
          <Pressable onPress={() => onNavigate('experience')} style={styles.navLink}>
            <Text style={styles.navText}>EXPERIENCE</Text>
          </Pressable>
          <Pressable onPress={() => onNavigate('skills')} style={styles.navLink}>
            <Text style={styles.navText}>SKILLS</Text>
          </Pressable>
          <Pressable onPress={() => onNavigate('contact')} style={styles.navLink}>
            <Text style={styles.navText}>CONTACT</Text>
          </Pressable>

          {/* Resume CTA */}
          <Pressable
            onPress={handleOpenResume}
            style={({ pressed }: { pressed: boolean }) => [
              styles.resumeButton,
              pressed && styles.resumeButtonPressed,
            ]}
          >
            <Text style={styles.resumeButtonText}>RESUME.PDF ↗</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.surfaceCanvas,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
    zIndex: 100,
  },
  inner: {
    maxWidth: 1152,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  identityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    flexWrap: 'wrap',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  brandCode: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  brandName: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  brandRole: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.tertiary,
    fontSize: 12,
    fontWeight: '500',
  },
  statusChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.statusSuccess,
  },
  statusText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 11,
    fontWeight: '500',
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    flexWrap: 'wrap',
  },
  navLink: {
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  navText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  resumeButton: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.radii.md,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  resumeButtonPressed: {
    backgroundColor: theme.colors.primaryMuted,
  },
  resumeButtonText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
