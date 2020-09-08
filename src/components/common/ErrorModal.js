import React from 'react';
import { View, Image, Modal, Text, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';

import globalStyles from '../../assets/styles/base/global';

@inject('uiStore')
@observer
class ErrorModal extends React.Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.uiStore.errors.visible}
        onRequestClose={() =>
          this.props.uiStore.setClassProps(
            [
              {
                name: 'visible',
                value: false,
              },
            ],
            this.props.uiStore.errors,
          )
        }
      >
        <View style={globalStyles.modal}>
          <View style={globalStyles.modalContent}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.uiStore.setClassProps(
                    [
                      {
                        name: 'visible',
                        value: false,
                      },
                    ],
                    this.props.uiStore.errors,
                  )
                }
                style={{ alignItems: 'flex-end' }}
              >
                <Image
                  source={require('../../assets/images/icons/close.png')}
                  style={globalStyles.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../../assets/images/icons/error.png')}
                style={{ width: 35 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}
              >
                {this.props.uiStore.errors.title}
              </Text>
              <Text
                style={{
                  marginBottom: 30,
                  textAlign: 'center',
                }}
              >
                {this.props.uiStore.errors.message}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ErrorModal;
