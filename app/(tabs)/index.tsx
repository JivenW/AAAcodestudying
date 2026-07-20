import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useAppStore } from '@/store/useAppStore';
import { colors, spacing } from '@/theme/tokens';

export default function HomeScreen() {
  const databaseReady = useAppStore((state) => state.databaseReady);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>售后工单系统</Text>
        <Text style={styles.description}>基础框架已就绪：路由、状态管理、本地数据库连接与扩展目录已配置。</Text>
        <Text style={styles.status}>数据库状态：{databaseReady ? '已连接' : '初始化中'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  card: { backgroundColor: colors.surface, borderRadius: 16, padding: spacing.lg, gap: spacing.md },
  title: { color: colors.textPrimary, fontSize: 24, fontWeight: '700' },
  description: { color: colors.textSecondary, fontSize: 16, lineHeight: 24 },
  status: { color: colors.primary, fontSize: 16, fontWeight: '600' },
});
