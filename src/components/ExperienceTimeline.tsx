import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/tokens';
import { experienceData, ExperienceItem } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionCode}>// SECTION_03</Text>
        <Text style={styles.sectionTitle}>ENGINEERING EXPERIENCE & MILESTONES</Text>
      </View>

      <View style={styles.timelineList}>
        {experienceData.map((item: ExperienceItem, index: number) => (
          <View key={item.id} style={styles.timelineItem}>
            {/* Left guideline & node */}
            <View style={styles.lineCol}>
              <View style={styles.nodeMarker} />
              {index !== experienceData.length - 1 && <View style={styles.verticalLine} />}
            </View>

            {/* Content block */}
            <View style={styles.contentCol}>
              <View style={styles.itemHeader}>
                <Text style={styles.periodText}>{item.period}</Text>
                <Text style={styles.roleText}>{item.role}</Text>
                <Text style={styles.companyText}>@ {item.company}</Text>
              </View>

              <Text style={styles.scopeText}>{item.scope}</Text>

              <View style={styles.metricsContainer}>
                {item.metrics.map((metric: string, idx: number) => (
                  <View key={idx} style={styles.metricRow}>
                    <Text style={styles.metricBullet}>▸</Text>
                    <Text style={styles.metricText}>{metric}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
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
  timelineList: {
    paddingLeft: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.xl,
  },
  lineCol: {
    width: 24,
    alignItems: 'center',
  },
  nodeMarker: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    marginTop: 6,
  },
  verticalLine: {
    width: 1,
    flex: 1,
    backgroundColor: theme.colors.borderStructural,
    marginTop: 4,
  },
  contentCol: {
    flex: 1,
    paddingLeft: theme.spacing.sm,
  },
  itemHeader: {
    marginBottom: 6,
  },
  periodText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  roleText: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 18,
    fontWeight: '700',
  },
  companyText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 13,
  },
  scopeText: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutralMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  metricsContainer: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    padding: theme.spacing.sm,
    gap: 6,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  metricBullet: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 12,
    lineHeight: 18,
  },
  metricText: {
    flex: 1,
    fontFamily: theme.fonts.sans,
    color: theme.colors.neutral,
    fontSize: 13,
    lineHeight: 18,
  },
});
