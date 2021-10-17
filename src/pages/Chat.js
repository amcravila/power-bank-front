// components
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ChatBot from 'react-simple-chatbot';
import stepsChat from './chatSteps';
import botAvatar from './botAvatar.png';
import userAvatar from './userAvatar.png';
// ----------------------------------------------------------------------

const theme = {
  headerBgColor: '#00CED1',
  botBubbleColor: '#C8FACD',
  userBubbleColor: '#D0F2FF',
};
class Review extends Component {
  render() {
    return (
      <div>
        <h3>Summary</h3>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class Chat extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box m={3}>
          <ChatBot
            style={{ width: '100%', height: '650px', headerBgColor: 'blue' }}
            steps={stepsChat}
            placeholder={'Digite a mensagem ...'}
            botAvatar={botAvatar}
            userAvatar={userAvatar}
            botDelay='1500'
            footerStyle={{ top: '130px' }}
          />
        </Box>
      </ThemeProvider>
    );
  }
}

export default Chat;
