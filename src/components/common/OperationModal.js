import React from 'react';
import { View, Modal, Text, ActivityIndicator } from 'react-native';
import { inject, observer } from 'mobx-react';

import globalStyles from '../../assets/styles/base/global';

@inject('uiStore')
@observer
class OperationModal extends React.Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.uiStore.operation.visible}
        onRequestClose={() =>
          this.props.uiStore.setClassProps(
            [
              {
                name: 'visible',
                value: false,
              },
            ],
            this.props.uiStore.operation,
          )
        }
      >
        <View style={globalStyles.modal}>
          <View style={globalStyles.modalContent}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator />
              <Text
                style={{
                  color: '#808080',
                  marginVertical: 10,
                  fontSize: 14,
                }}
              >
                {this.props.uiStore.operation.desc}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default OperationModal;
