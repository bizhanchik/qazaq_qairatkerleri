// components/YouTubeVideo.tsx
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

interface Props {
  videoId: string;
}

const YouTubeVideo: React.FC<Props> = ({ videoId }) => {
  const html = `
    <html>
      <body style="margin:0;padding:0;">
        <iframe width="100%" height="100%" 
          src="https://www.youtube.com/embed/${videoId}" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html }}
        style={styles.webview}
        allowsFullscreenVideo
      />
    </View>
  );
};

export default YouTubeVideo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('window').width * 9) / 16,
    marginBottom: 15,
  },
  webview: {
    flex: 1,
  },
});
