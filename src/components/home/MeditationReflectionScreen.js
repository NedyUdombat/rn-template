import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { inject, observer } from 'mobx-react';
// eslint-disable-next-line no-unused-vars
import Toast, { DURATION } from 'react-native-easy-toast';

import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';
import homeStyles from '../../assets/styles/components/home';
import appStyles from '../../assets/styles/components/app';

@inject('uiStore')
@observer
class MeditationReadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reflection: '',
    };
  }

  data = ['Resource 1', 'Resource 2', 'Resource 3'];
  render() {
    const {
      navigation,
      route: {
        params: { data },
      },
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
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
            <View style={{ marginBottom: 30 }}>
              <View style={homeStyles.activePageIndicatorContainer}>
                <TouchableOpacity
                  style={[
                    homeStyles.activePageIndicator,
                    { backgroundColor: 'rgba(0, 0, 0, 0.24)' },
                  ]}
                  onPress={() =>
                    navigation.navigate('MeditationStartScreen', { data })
                  }
                />
                <TouchableOpacity
                  style={[
                    homeStyles.activePageIndicator,
                    { backgroundColor: 'rgba(0, 0, 0, 0.24)' },
                  ]}
                  onPress={() =>
                    navigation.navigate('MeditationReadingScreen', { data })
                  }
                />
                <TouchableOpacity
                  style={[
                    homeStyles.activePageIndicator,
                    { backgroundColor: 'rgba(0, 0, 0, 0.72)' },
                  ]}
                  onPress={() =>
                    navigation.navigate('MeditationReflectionScreen', { data })
                  }
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home', {})}
                >
                  <Image
                    source={require('../../assets/images/icons/close_grey.png')}
                    style={appStyles.headerIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView>
              <View style={{ marginBottom: 159 }}>
                <Text style={homeStyles.readingContainerTitle}>Reflection</Text>
                <Text style={homeStyles.readingContainerScripture}>
                  {data.reflection}
                </Text>

                <TextInput
                  multiline
                  numberOfLines={4}
                  onChangeText={text => this.setState({ reflection: text })}
                  value={this.state.reflection}
                  style={{
                    borderColor: '#E5E5E5',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: 4,
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    paddingTop: 12,
                    height: 219,
                    marginBottom: 42,
                  }}
                  placeholder="Enter your reflection here"
                />

                <TouchableOpacity style={globalStyles.fullButton}>
                  <Text style={globalStyles.fullButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

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
      </View>
    );
  }
}

export default MeditationReadingScreen;
