import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

interface IConversation {
  lastMessage: string;
  lastToSend: string;
  lastMessageTime: string;
}

const Conversations: React.FC = () => {
  const [conversations, setConversations] = useState<IConversation[]>([]);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {conversations.length ? (
        <FlatList
          data={conversations}
          renderItem={({ item: conversation }) => (
            <View>
              <Text>{conversation.lastMessage}</Text>
              <Text>{conversation.lastToSend}</Text>
              <Text>{conversation.lastMessageTime}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.message}>Você ainda não tem conversas</Text>
      )}
    </View>
  );
};

export default Conversations;
