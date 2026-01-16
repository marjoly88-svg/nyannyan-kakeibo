import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cupids.kakeibo',
  appName: '家計簿',
  webDir: 'www',
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#f9f5f5',
    preferredContentMode: 'mobile'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#f9f5f5',
      showSpinner: false
    }
  }
};

export default config;
