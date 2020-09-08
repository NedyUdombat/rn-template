import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { inject, observer } from 'mobx-react';
// eslint-disable-next-line no-unused-vars
import Toast, { DURATION } from 'react-native-easy-toast';

// import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';
import homeStyles from '../../assets/styles/components/home';
import appStyles from '../../assets/styles/components/app';

@inject('uiStore')
@observer
class MeditationStartScreen extends React.Component {
  render() {
    const {
      navigation,
      route: {
        params: { data },
      },
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
        <ImageBackground
          source={require('../../assets/images/meditation-backdrop-full.png')}
          style={[
            homeStyles.backdropImage,
            { flex: 1, backgroundColor: '#FBFBFB' },
          ]}
        >
          <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <Toast
              position="top"
              style={{
                position: 'absolute',
                bottom: 40,
                ...placeholders.platformStyles('android', { bottom: 50 }),
              }}
              ref={refObj => {
                this.toastRef = refObj;
              }}
            />
            <View
              style={{
                flex: 1,
                paddingHorizontal: 18,
                paddingTop: 12,
              }}
            >
              <View style={{ marginBottom: 'auto' }}>
                <View style={homeStyles.activePageIndicatorContainer}>
                  <TouchableOpacity
                    style={[
                      homeStyles.activePageIndicator,
                      { backgroundColor: '#FFFFFF' },
                    ]}
                    onPress={() =>
                      navigation.navigate('MeditationStartScreen', { data })
                    }
                  />
                  <TouchableOpacity
                    style={homeStyles.activePageIndicator}
                    onPress={() =>
                      navigation.navigate('MeditationReadingScreen', { data })
                    }
                  />
                  <TouchableOpacity
                    style={homeStyles.activePageIndicator}
                    onPress={() =>
                      navigation.navigate('MeditationReflectionScreen', {
                        data,
                      })
                    }
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home', {})}
                  >
                    <Image
                      source={require('../../assets/images/icons/close_white.png')}
                      style={appStyles.headerIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginBottom: 'auto' }}>
                <Text style={homeStyles.startScreenScripture}>
                  {data.scripture}
                </Text>
                <Text style={homeStyles.startScreenName}>{data.name}</Text>
                <Text style={homeStyles.startScreenAudioDuration}>14 mins</Text>
              </View>

              <View style={homeStyles.audioControlPanel}>
                <View
                  style={[
                    homeStyles.quickActionsContainer,
                    {
                      marginTop: 0,
                      marginBottom: 30,
                    },
                  ]}
                >
                  <TouchableOpacity
                    style={[
                      homeStyles.quickActionsContainerButton,
                      { marginRight: 9 },
                    ]}
                  >
                    <Image
                      source={require('../../assets/images/icons/favorite-alt.png')}
                      style={homeStyles.quickActionsContainerIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      homeStyles.quickActionsContainerButton,
                      { marginLeft: 9 },
                    ]}
                  >
                    <Image
                      source={require('../../assets/images/icons/share.png')}
                      style={homeStyles.quickActionsContainerIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

export default MeditationStartScreen;
