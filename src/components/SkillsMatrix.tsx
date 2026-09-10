import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/tokens';
import { skillsData, SkillCategory } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionCode}>// SECTION_04</Text>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS & DOMAIN MATRIX</Text>
      </View>

      <View style={styles.matrixGrid}>
        {skillsData.map((category: SkillCategory, idx: number) => (
          <View key={idx} style={styles.categoryCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.categoryName}>// {category.name.toUpperCase()}</Text>
            </View>
            <View style={styles.chipsContainer}>
              {category.skills.map((skill: string, skillIdx: number) => (
                <View key={skillIdx} style={styles.skillChip}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
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
  matrixGrid: {
    gap: theme.spacing.md,
  },
  categoryCard: {
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
  },
  categoryName: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: theme.spacing.md,
  },
  skillChip: {
    backgroundColor: theme.colors.surfaceElevated,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  skillText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 12,
    fontWeight: '500',
  },
});
