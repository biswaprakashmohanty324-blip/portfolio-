import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { theme } from '../theme/tokens';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(profileData.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenEmail = () => {
    Linking.openURL(`mailto:${profileData.email}`).catch(() => {});
  };

  const handleOpenGitHub = () => {
    Linking.openURL(profileData.github).catch(() => {});
  };

  const handleOpenLinkedIn = () => {
    Linking.openURL(profileData.linkedin).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionCode}>// SECTION_05</Text>
        <Text style={styles.sectionTitle}>CONTACT & COMMUNICATION REGISTER</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>DIRECT_CHANNELS</Text>
          <Text style={styles.cardHeaderMeta}>STATUS: OPEN_TO_ROLES</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.invitationText}>
            Interested in collaborating on distributed systems, cross-platform client architecture, or high-throughput services?
          </Text>

          <View style={styles.actionRow}>
            <Pressable
              onPress={handleOpenEmail}
              style={({ pressed }: { pressed: boolean }) => [
                styles.primaryBtn,
                pressed && styles.primaryBtnPressed,
              ]}
            >
              <Text style={styles.primaryBtnText}>SEND EMAIL ✉</Text>
            </Pressable>

            <Pressable
              onPress={handleCopyEmail}
              style={({ pressed }: { pressed: boolean }) => [
                styles.secondaryBtn,
                pressed && styles.secondaryBtnPressed,
              ]}
            >
              <Text style={styles.secondaryBtnText}>
                {copied ? '✓ COPIED TO CLIPBOARD' : `COPY: ${profileData.email}`}
              </Text>
            </Pressable>
          </View>

          <View style={styles.divider} />

          <View style={styles.linkRow}>
            <Pressable onPress={handleOpenGitHub} style={styles.linkItem}>
              <Text style={styles.linkText}>GITHUB: biswaprakashmohanty324-blip ↗</Text>
            </Pressable>
            <Pressable onPress={handleOpenLinkedIn} style={styles.linkItem}>
              <Text style={styles.linkText}>LINKEDIN: linkedin.com ↗</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Footer System Register */}
      <View style={styles.footerRegister}>
        <Text style={styles.footerText}>
          ENGINEERED WITH REACT NATIVE & EXPO // TECHNICAL BLUEPRINT v1.0
        </Text>
        <Text style={styles.footerCopy}>© {new Date().getFullYear()} {profileData.name}. ALL RIGHTS RESERVED.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.xl,
    paddingBottom: theme.spacing['3xl'],
  },
  sectionHeader: {
    marginBottom: theme.spacing.lg,
  },
  sectionCode: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  sectionTitle: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    ...theme.typography.headlineLg,
  },
  card: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.md,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: theme.colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderTitle: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardHeaderMeta: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.statusSuccess,
    fontSize: 10,
    fontWeight: '600',
  },
  body: {
    padding: theme.spacing.lg,
  },
  invitationText: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutralMuted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
    maxWidth: 600,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
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
    backgroundColor: theme.colors.surfaceElevated,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.radii.md,
  },
  secondaryBtnPressed: {
    borderColor: theme.colors.primary,
  },
  secondaryBtnText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(51, 65, 85, 0.4)',
    marginVertical: theme.spacing.md,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.lg,
  },
  linkItem: {
    paddingVertical: 4,
  },
  linkText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primaryLight,
    fontSize: 12,
    fontWeight: '600',
  },
  footerRegister: {
    marginTop: theme.spacing['2xl'],
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderStructural,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  footerText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 11,
  },
  footerCopy: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 11,
  },
});
