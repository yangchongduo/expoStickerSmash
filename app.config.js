const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.yourname.stickersmash.dev';
  }

  if (IS_PREVIEW) {
    return 'com.yourname.stickersmash.preview';
  }

  return 'com.yourname.stickersmash';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }

  return 'StickerSmash: Emoji Stickers';
};


export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    // buildNumber: 1,
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    // versionCode: 1,
    ...config.android,
    package: getUniqueIdentifier(),
  },
});
