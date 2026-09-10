import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  LayoutChangeEvent,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme/tokens';
import { projectsData, Project } from './src/data/portfolioData';
import { SystemBar } from './src/components/SystemBar';
import { HeroWorkbench } from './src/components/HeroWorkbench';
import { ProjectCard } from './src/components/ProjectCard';
import { TerminalWidget } from './src/components/TerminalWidget';
import { ExperienceTimeline } from './src/components/ExperienceTimeline';
import { SkillsMatrix } from './src/components/SkillsMatrix';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Store layout Y offsets for in-page navigation
  const sectionPositions = useRef<{ [key: string]: number }>({});

  const handleLayout = (section: string) => (event: LayoutChangeEvent) => {
    sectionPositions.current[section] = event.nativeEvent.layout.y;
  };

  const handleNavigate = (section: string) => {
    const y = sectionPositions.current[section] || 0;
    scrollViewRef.current?.scrollTo({ y: Math.max(0, y - 20), animated: true });
  };

  const categories: string[] = ['ALL', 'Distributed Systems', 'Mobile & Frontend', 'Cloud & Infra'];

  const filteredProjects: Project[] = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p: Project) => p.category === activeCategory);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor={theme.colors.surfaceCanvas} />

      {/* Top System Bar */}
      <SystemBar onNavigate={handleNavigate} />

      {/* Main Scrollable Canvas */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.maxWidthWrapper}>
          {/* Hero Section */}
          <View onLayout={handleLayout('hero')}>
            <HeroWorkbench onNavigate={handleNavigate} />
          </View>

          {/* Section 01: Projects Showcase */}
          <View onLayout={handleLayout('projects')} style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionCode}>// SECTION_01</Text>
              <Text style={styles.sectionTitle}>FEATURED PROJECTS & SYSTEM ARCHITECTURES</Text>
            </View>

            {/* Filter Chips Bar */}
            <View style={styles.filterBar}>
              <Text style={styles.filterLabel}>FILTER:</Text>
              {categories.map((cat: string) => {
                const isActive = activeCategory === cat;
                return (
                  <Pressable
                    key={cat}
                    onPress={() => setActiveCategory(cat)}
                    style={[
                      styles.filterChip,
                      isActive && styles.filterChipActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        isActive && styles.filterChipTextActive,
                      ]}
                    >
                      {cat.toUpperCase()}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Project Cards List */}
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </View>

          {/* Section 02: Interactive Terminal Workbench */}
          <View onLayout={handleLayout('terminal')} style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionCode}>// SECTION_02</Text>
              <Text style={styles.sectionTitle}>INTERACTIVE WORKBENCH TELEMETRY</Text>
            </View>
            <TerminalWidget />
          </View>

          {/* Section 03: Engineering Experience */}
          <View onLayout={handleLayout('experience')}>
            <ExperienceTimeline />
          </View>

          {/* Section 04: Technical Skills Matrix */}
          <View onLayout={handleLayout('skills')}>
            <SkillsMatrix />
          </View>

          {/* Section 05: Contact & Communication Register */}
          <View onLayout={handleLayout('contact')}>
            <ContactSection />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.surfaceCanvas,
  },
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.surfaceCanvas,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  maxWidthWrapper: {
    maxWidth: 1152,
    width: '100%',
  },
  sectionContainer: {
    paddingVertical: theme.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
  },
  sectionHeader: {
    marginBottom: theme.spacing.md,
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
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: theme.spacing.lg,
  },
  filterLabel: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralSubtle,
    fontSize: 11,
    fontWeight: '700',
    marginRight: 4,
  },
  filterChip: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  filterChipActive: {
    backgroundColor: theme.colors.primaryMuted,
    borderColor: theme.colors.primary,
  },
  filterChipText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 11,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: theme.colors.primaryLight,
  },
});
