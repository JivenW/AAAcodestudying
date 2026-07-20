import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { appConfig } from '@/config/app';
import { colors, spacing } from '@/theme/tokens';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>项目配置</Text>
      <Text style={styles.item}>API 地址：{appConfig.apiBaseUrl}</Text>
      <Text style={styles.item}>当前阶段：环境搭建与基础框架</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, gap: spacing.md },
  title: { color: colors.textPrimary, fontSize: 22, fontWeight: '700' },
  item: { color: colors.textSecondary, fontSize: 16 },
});
