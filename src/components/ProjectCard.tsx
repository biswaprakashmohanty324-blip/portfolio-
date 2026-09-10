import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { theme } from '../theme/tokens';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps) => {
  const handleOpenRepo = () => {
    Linking.openURL(project.repoUrl).catch(() => {});
  };

  const handleOpenLive = () => {
    if (project.liveUrl) {
      Linking.openURL(project.liveUrl).catch(() => {});
    }
  };

  const isProduction = project.status === 'PRODUCTION';

  return (
    <View style={styles.card}>
      {/* Top Metadata Strip */}
      <View style={styles.metadataStrip}>
        <View style={styles.statusGroup}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isProduction ? theme.colors.statusSuccess : theme.colors.statusWarning },
            ]}
          />
          <Text style={styles.statusText}>{project.status}</Text>
          <Text style={styles.categoryText}>// {project.category.toUpperCase()}</Text>
        </View>

        <View style={styles.linksGroup}>
          <Pressable onPress={handleOpenRepo} style={styles.iconLink}>
            <Text style={styles.linkText}>REPO ↗</Text>
          </Pressable>
          {project.liveUrl && (
            <Pressable onPress={handleOpenLive} style={styles.iconLink}>
              <Text style={[styles.linkText, styles.liveText]}>LIVE DEMO ↗</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Main Content Body */}
      <View style={styles.body}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.tagline}>{project.tagline}</Text>

        <View style={styles.divider} />

        {/* Architecture Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>// SYSTEM_ARCHITECTURE</Text>
          <Text style={styles.architectureText}>{project.architecture}</Text>
        </View>

        {/* Benchmarks Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>// MEASURABLE_METRICS</Text>
          {project.benchmarks.map((benchmark: string, idx: number) => (
            <View key={idx} style={styles.benchmarkRow}>
              <Text style={styles.benchmarkBullet}>■</Text>
              <Text style={styles.benchmarkText}>{benchmark}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Tech Stack Badges */}
        <View style={styles.stackRow}>
          {project.stack.map((tech: string, idx: number) => (
            <View key={idx} style={styles.techChip}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
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
    marginBottom: theme.spacing.lg,
  },
  metadataStrip: {
    backgroundColor: theme.colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  statusGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  categoryText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 11,
  },
  linksGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconLink: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  linkText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 11,
    fontWeight: '600',
  },
  liveText: {
    color: theme.colors.primaryLight,
  },
  body: {
    padding: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  tagline: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutralMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: theme.spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(51, 65, 85, 0.4)',
    marginVertical: theme.spacing.sm,
  },
  sectionBlock: {
    marginVertical: 4,
  },
  sectionLabel: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  architectureText: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 13,
    lineHeight: 19,
  },
  benchmarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 3,
  },
  benchmarkBullet: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 8,
  },
  benchmarkText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 12,
  },
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  techChip: {
    backgroundColor: theme.colors.surfaceElevated,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  techText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 11,
    fontWeight: '500',
  },
});
