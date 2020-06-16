import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import { IInstitution } from '../../interfaces/IInstitutions';

const Institution: React.FC = () => {
  const [institutions, setInstitution] = useState<IInstitution[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadInstitutions() {
      try {
        const response = await api.get('/juridical');

        setInstitution(response.data);

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
      {institutions.length ? (
        <FlatList
          data={institutions}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          keyExtractor={(institution) => String(institution.id)}
          renderItem={({ item: institution }) => (
            <View style={styles.containerInstitution}>
              <Text style={styles.content}>{institution.full_name}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.message}>Nenhuma instituição visível</Text>
      )}
    </View>
  );
};

export default Institution;
