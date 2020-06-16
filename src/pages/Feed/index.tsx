import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';

import Card from './Card';
import { IRequirements } from '../../interfaces/IRequirements';

import styles from './styles';

import api from '../../services/api';

const Feed: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirements[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadInstitutions() {
      try {
        //const response = await api.get('/requirements');

        //setRequirements(response.data);

        setRefreshing(false);
      } catch (error) {
        setRefreshing(false);

        Alert.alert(
          'Houve um erro ao buscar os dados!',
          'Houve um erro ao buscar as petições das intituições. Verifique sua conexão',
        );
      }
    }

    loadInstitutions();
  }, [refreshing]);

  return (
    <View style={styles.container}>
      {requirements.length ? (
        <FlatList
          data={requirements}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: requirement }) => (
            <Card requirement={requirement} />
          )}
        />
      ) : (
        <Text style={styles.message}>
          Nenhuma solicitação das instituição aberta
        </Text>
      )}
    </View>
  );
};

export default Feed;
