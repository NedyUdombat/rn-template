import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { inject, observer } from 'mobx-react';
// eslint-disable-next-line no-unused-vars
import Toast, { DURATION } from 'react-native-easy-toast';
import moment, { months } from 'moment';

import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';
import homeStyles from '../../assets/styles/components/home';

const window = Dimensions.get('window');

@inject('uiStore', 'meditationStore')
@observer
class HomeDefaultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hOffset: '',
    };
  }

  componentDidMount = () => {
    this.props.meditationStore.getTodaysMeditations();
    this.props.meditationStore.getRecentMeditations();
  };

  handleScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    this.setState(previousState => ({
      ...previousState,
      hOffset: y,
    }));
  };

  render() {
    const { hOffset } = this.state;
    const { navigation, meditationStore } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FBFBFB',
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
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
          <View style={globalStyles.container}>
            <Text style={homeStyles.title}>Good Morning {this.userName}</Text>

            <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll}>
              {meditationStore.todaysMeditation.name && (
                <View style={homeStyles.previewBox}>
                  <ImageBackground
                    source={require('../../assets/images/meditation-backdrop.png')}
                    style={homeStyles.backdropImage}
                  >
                    <Text style={homeStyles.previewBoxMeditationName}>
                      {meditationStore.todaysMeditation.name}
                    </Text>
                    <Text style={homeStyles.previewBoxMeditationScripture}>
                      {meditationStore.todaysMeditation.scripture}
                    </Text>
                    <Text style={homeStyles.previewBoxMeditationAudioDuration}>
                      14 mins
                    </Text>

                    <TouchableOpacity
                      style={globalStyles.startButton}
                      onPress={() =>
                        navigation.navigate('HomeScreens', {
                          screen: 'MeditationStartScreen',
                          params: {
                            data: meditationStore.todaysMeditation,
                          },
                        })
                      }
                    >
                      <Text style={globalStyles.startButtonText}>Start</Text>
                      <Image
                        source={require('../../assets/images/icons/start-button-icon.png')}
                        style={globalStyles.startButtonIcon}
                      />
                    </TouchableOpacity>

                    <View style={homeStyles.quickActionsContainer}>
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
                  </ImageBackground>
                </View>
              )}

              <View style={homeStyles.previewBoxMini}>
                <ImageBackground
                  source={require('../../assets/images/meditation-backdrop.png')}
                  style={homeStyles.backdropImageMini}
                >
                  <View>
                    <Text style={homeStyles.previewBoxMiniMeditationDate}>
                      {moment().format('DD MMMM')}
                    </Text>
                    <Text style={homeStyles.previewBoxMiniMeditationName}>
                      God is our shield and strength
                    </Text>
                    <Text style={homeStyles.previewBoxMiniMeditationScripture}>
                      Psalm 84: 1 - 12
                    </Text>
                  </View>

                  <View>
                    <TouchableOpacity
                      style={globalStyles.playButton}
                      onPress={() =>
                        navigation.navigate('HomeScreens', {
                          screen: 'MeditationStartScreen',
                        })
                      }
                    >
                      <Image
                        source={require('../../assets/images/icons/play-circle.png')}
                        style={globalStyles.playButtonIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>

              {meditationStore.featuredMeditation && (
                <View style={homeStyles.featuredMeditationContainer}>
                  <Text style={homeStyles.subTitle}>Featured Meditations</Text>

                  <View style={globalStyles.meditationCard}>
                    <View style={globalStyles.row}>
                      <Text
                        style={[
                          globalStyles.meditationCardIdentifier,
                          { color: '#FFC60B' },
                        ]}
                      >
                        Featured
                      </Text>
                      {this.locked && (
                        <Image
                          source={require('../../assets/images/icons/lock.png')}
                          style={globalStyles.lockIcon}
                        />
                      )}
                    </View>
                    <Text style={globalStyles.meditationCardTitle}>
                      Introduction to Meditation
                    </Text>
                    <Text style={globalStyles.meditationCardScripture}>
                      Malachi 1 : 8 - 12
                    </Text>

                    <View
                      style={[
                        globalStyles.meditationCardPattern,
                        { backgroundColor: '#FFC60B' },
                      ]}
                    />
                  </View>
                </View>
              )}

              {meditationStore.recentMeditations.length > 0 && (
                <View style={homeStyles.featuredMeditationContainer}>
                  <Text style={homeStyles.subTitle}>Previous Meditations</Text>
                  {meditationStore.recentMeditations.map(meditation => (
                    <TouchableOpacity
                      key={meditation.date}
                      style={globalStyles.meditationCard}
                      onPress={() =>
                        navigation.navigate('HomeScreens', {
                          screen: 'MeditationStartScreen',
                          params: {
                            data: meditation,
                          },
                        })
                      }
                    >
                      <View style={globalStyles.row}>
                        <Text
                          style={[
                            globalStyles.meditationCardIdentifier,
                            { color: meditation.color },
                          ]}
                        >
                          {moment(meditation.publishedDate).format('DD MMMM')}
                        </Text>
                        {meditation.locked && (
                          <Image
                            source={require('../../assets/images/icons/lock.png')}
                            style={globalStyles.lockIcon}
                          />
                        )}
                      </View>
                      <Text style={globalStyles.meditationCardTitle}>
                        {meditation.name}
                      </Text>
                      <Text style={globalStyles.meditationCardScripture}>
                        {meditation.scripture}
                      </Text>

                      <View
                        style={[
                          globalStyles.meditationCardPattern,
                          { backgroundColor: meditation.color },
                        ]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeDefaultScreen;
