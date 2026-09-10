import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Platform,
} from 'react-native';
import { theme } from '../theme/tokens';
import { profileData, projectsData, skillsData } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: string[];
}

export const TerminalWidget: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'sys.status',
      output: [
        'Biswa Prakash Workbench v2.4.0 [x86_64-apple-darwin / linux-amd64]',
        'Type "help" to view available terminal routines.',
      ],
    },
  ]);

  const scrollViewRef = useRef<ScrollView>(null);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: string[] = [];

    switch (cmd) {
      case 'help':
        output = [
          'AVAILABLE ROUTINES:',
          '  help      - Output this help register',
          '  about     - Output engineering biography and core competencies',
          '  projects  - Query featured project architectures and benchmarks',
          '  skills    - Print categorized technical skill matrix',
          '  contact   - Output direct communication endpoints',
          '  specs     - Print system runtime specifications',
          '  clear     - Flush terminal output buffer',
        ];
        break;

      case 'about':
        output = [
          `NAME: ${profileData.name}`,
          `TITLE: ${profileData.title}`,
          `STATUS: ${profileData.systemStatus}`,
          'BIO: Software engineer focused on building resilient distributed systems,',
          'low-latency microservices, and high-density cross-platform client interfaces.',
        ];
        break;

      case 'projects':
        output = [
          'FEATURED REPOSITORIES & SYSTEMS:',
          ...projectsData.map(
            (p) => `  [${p.status}] ${p.title} (${p.category}) -> ${p.benchmarks[0]}`
          ),
          'Use project cards above to inspect architecture diagrams and live demos.',
        ];
        break;

      case 'skills':
        output = [
          'SYSTEM CAPABILITIES & DOMAINS:',
          ...skillsData.map(
            (cat) => `  ${cat.name.toUpperCase()}: ${cat.skills.join(', ')}`
          ),
        ];
        break;

      case 'specs':
        output = [
          'SYSTEM TELEMETRY:',
          ...profileData.specs.map((s) => `  ${s.label}: ${s.value}`),
        ];
        break;

      case 'contact':
        output = [
          'COMMUNICATION ENDPOINTS:',
          `  EMAIL:    ${profileData.email}`,
          `  GITHUB:   ${profileData.github}`,
          `  LINKEDIN: ${profileData.linkedin}`,
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = [
          `Command not recognized: "${cmd}".`,
          'Type "help" to inspect valid operational routines.',
        ];
        break;
    }

    setHistory((prev: HistoryItem[]) => [
      ...prev,
      { id: String(Date.now()), command: rawCmd, output },
    ]);
    setInputVal('');

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 50);
  };

  const handleQuickCommand = (cmd: string) => {
    executeCommand(cmd);
  };

  return (
    <View style={styles.card}>
      {/* Terminal Title Bar */}
      <View style={styles.titleBar}>
        <View style={styles.windowControls}>
          <View style={[styles.dot, styles.dotClose]} />
          <View style={[styles.dot, styles.dotMin]} />
          <View style={[styles.dot, styles.dotMax]} />
        </View>
        <Text style={styles.titleText}>session@biswa-workbench:~ (bash)</Text>
        <Text style={styles.statusIndicator}>● TTY1</Text>
      </View>

      {/* Quick Suggestion Chips for touch / quick interaction */}
      <View style={styles.chipRow}>
        <Text style={styles.chipLabel}>ROUTINES:</Text>
        {['help', 'about', 'projects', 'skills', 'contact', 'clear'].map(
          (cmd: string) => (
            <Pressable
              key={cmd}
              onPress={() => handleQuickCommand(cmd)}
              style={({ pressed }: { pressed: boolean }) => [
                styles.cmdChip,
                pressed && styles.cmdChipPressed,
              ]}
            >
              <Text style={styles.cmdChipText}>${cmd}</Text>
            </Pressable>
          )
        )}
      </View>

      {/* Terminal Output Well */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.terminalBody}
        contentContainerStyle={styles.terminalContent}
        nestedScrollEnabled
      >
        {history.map((item: HistoryItem) => (
          <View key={item.id} style={styles.historyBlock}>
            <View style={styles.promptLine}>
              <Text style={styles.promptArrow}>&gt;</Text>
              <Text style={styles.promptCommand}>{item.command}</Text>
            </View>
            {item.output.map((line: string, i: number) => (
              <Text key={i} style={styles.outputLine}>
                {line}
              </Text>
            ))}
          </View>
        ))}

        {/* Active Input Line */}
        <View style={styles.inputLine}>
          <Text style={styles.promptArrow}>&gt;</Text>
          <TextInput
            style={styles.textInput}
            value={inputVal}
            onChangeText={setInputVal}
            onSubmitEditing={() => executeCommand(inputVal)}
            placeholder="Type routine (e.g. help, projects, skills)..."
            placeholderTextColor={theme.colors.tertiary}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="go"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceDeep,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.lg,
    overflow: 'hidden',
    marginVertical: theme.spacing.lg,
  },
  titleBar: {
    backgroundColor: theme.colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  windowControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotClose: { backgroundColor: '#DC2626' },
  dotMin: { backgroundColor: '#D97706' },
  dotMax: { backgroundColor: '#059669' },
  titleText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 11,
    fontWeight: '500',
  },
  statusIndicator: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.statusSuccess,
    fontSize: 10,
    fontWeight: '700',
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 8,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderStructural,
  },
  chipLabel: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: '700',
    marginRight: 4,
  },
  cmdChip: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.borderStructural,
    borderRadius: theme.radii.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cmdChipPressed: {
    backgroundColor: theme.colors.primaryMuted,
    borderColor: theme.colors.primary,
  },
  cmdChipText: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 11,
    fontWeight: '500',
  },
  terminalBody: {
    height: 240,
    padding: theme.spacing.md,
  },
  terminalContent: {
    paddingBottom: theme.spacing.md,
  },
  historyBlock: {
    marginBottom: theme.spacing.sm,
  },
  promptLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  promptArrow: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  promptCommand: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 13,
    fontWeight: '600',
  },
  outputLine: {
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutralMuted,
    fontSize: 12,
    lineHeight: 18,
    paddingLeft: 16,
  },
  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  textInput: {
    flex: 1,
    fontFamily: theme.fonts.mono,
    color: theme.colors.neutral,
    fontSize: 13,
    padding: 0,
    ...Platform.select({
      web: {
        outlineStyle: 'none' as any,
      },
    }),
  },
});
