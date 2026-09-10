import React from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions, Linking, Image } from 'react-native';
import { theme } from '../theme/tokens';
import { profileData } from '../data/portfolioData';
import { SpecSheet } from './SpecSheet';

interface HeroWorkbenchProps {
  onNavigate: (section: string) => void;
}

export const HeroWorkbench: React.FC<HeroWorkbenchProps> = ({ onNavigate }: HeroWorkbenchProps) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const handleOpenGitHub = () => {
    Linking.openURL(profileData.github).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={[styles.layout, isDesktop ? styles.rowLayout : styles.columnLayout]}>
        {/* Left / Top Narrative & Actions */}
        <View style={[styles.narrativeCol, isDesktop && styles.narrativeColDesktop]}>
          
          {/* Top Profile Photo Frame */}
          <View style={styles.photoContainer}>
            <View style={styles.photoFrame}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={styles.profilePhoto}
                resizeMode="cover"
              />
              <View style={styles.photoStatusTag}>
                <View style={styles.statusDot} />
                <Text style={styles.photoStatusText}>SYS_ID: VERIFIED // SDE</Text>
              </View>
            </View>
          </View>

          <View style={styles.breadcrumbTag}>
            <Text style={styles.breadcrumbText}>SYS_INIT // DEVELOPER_WORKBENCH</Text>
          </View>

          {/* Bold Name Headline */}
          <Text style={styles.headline}>{profileData.headline}</Text>
          <Text style={styles.roleBadge}>SOFTWARE ENGINEER // FULL-STACK & SYSTEMS</Text>

          <Text style={styles.subheadline}>{profileData.subheadline}</Text>

          {/* Action Button Row */}
          <View style={styles.actionRow}>
            <Pressable
              onPress={() => onNavigate('projects')}
              style={({ pressed }: { pressed: boolean }) => [
                styles.primaryBtn,
                pressed && styles.primaryBtnPressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>INSPECT PROJECTS ↓</Text>
            </Pressable>

            <Pressable
              onPress={() => onNavigate('terminal')}
              style={({ pressed }: { pressed: boolean }) => [
                styles.secondaryBtn,
                pressed && styles.secondaryBtnPressed,
              ]}
            >
              <Text style={styles.secondaryBtnText}>LAUNCH TERMINAL &gt;</Text>
            </Pressable>

            <Pressable
              onPress={handleOpenGitHub}
              style={({ pressed }: { pressed: boolean }) => [
                styles.ghostBtn,
                pressed && styles.ghostBtnPressed,
              ]}
            >
              <Text style={styles.ghostBtnText}>GITHUB ↗</Text>
            </Pressable>
          </View>
        </View>

        {/* Right / Bottom Spec Sheet */}
        <View style={[styles.specCol, isDesktop && styles.specColDesktop]}>
          <SpecSheet />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: theme.spacing['2xl'],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
  },
  layout: {
    width: '100%',
    gap: theme.spacing.xl,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  columnLayout: {
    flexDirection: 'column',
  },
  narrativeCol: {
    width: '100%',
  },
  narrativeColDesktop: {
    flex: 1.2,
  },
  photoContainer: {
    marginBottom: theme.spacing.lg,
    alignSelf: 'flex-start',
  },
  photoFrame: {
    width: 140,
    height: 180,
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.radii.md,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: '100%',
    height: 152,
  },
  photoStatusTag: {
    height: 26,
    backgroundColor: theme.colors.secondary,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderStructural,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.statusSuccess,
  },
  photoStatusText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  breadcrumbTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: theme.spacing.sm,
  },
  breadcrumbText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  headline: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  roleBadge: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primaryLight,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: theme.spacing.md,
  },
  subheadline: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutralMuted,
    ...theme.typography.bodyLg,
    lineHeight: 26,
    marginBottom: theme.spacing.xl,
    maxWidth: 640,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  primaryBtn: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.radii.md,
  },
  primaryBtnPressed: {
    backgroundColor: theme.colors.primaryHover,
  },
  primaryBtnText: {
    fontFamily: theme.fonts.mono,
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryBtn: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.radii.md,
  },
  secondaryBtnPressed: {
    backgroundColor: theme.colors.primaryMuted,
  },
  secondaryBtnText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primaryLight,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  ghostBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.radii.md,
  },
  ghostBtnPressed: {
    borderColor: theme.colors.borderProminent,
    backgroundColor: theme.colors.surfaceSubtle,
  },
  ghostBtnText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  specCol: {
    width: '100%',
  },
  specColDesktop: {
    flex: 0.8,
  },
});
