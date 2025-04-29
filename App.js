import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Stack = createNativeStackNavigator();

const receitas = [
  {
    id: 'bolo-cenoura',
    nome: 'Bolo de Cenoura com Cobertura de Chocolate',
    ingredientes: [
      '3 cenouras médias raladas',
      '4 ovos',
      '1 xícara de óleo',
      '2 xícaras de açúcar',
      '2 xícaras de farinha de trigo',
      '1 colher de sopa de fermento em pó',
      '1 lata de leite condensado',
      '1 colher de sopa de manteiga',
      '4 colheres de sopa de chocolate em pó',
    ],
    modo_preparo: [
      'Preaqueça o forno a 180°C.',
      'Unte e enfarinhe uma forma.',
      'No liquidificador, bata as cenouras, os ovos e o óleo.',
      'Em uma tigela, misture o açúcar e a farinha de trigo.',
      'Adicione a mistura do liquidificador aos ingredientes secos e mexa bem.',
      'Acrescente o fermento e misture delicadamente.',
      'Despeje a massa na forma e leve ao forno por cerca de 40 minutos.',
      'Enquanto o bolo assa, prepare a cobertura: em uma panela, misture o leite condensado, a manteiga e o chocolate em pó.',
      'Leve ao fogo baixo, mexendo sempre, até engrossar.',
      'Retire o bolo do forno, espere esfriar e cubra com a cobertura.',
    ],
  },
  {
    id: 'salada-frutas',
    nome: 'Salada de Frutas Refrescante',
    ingredientes: [
      '1 manga madura picada',
      '1/2 mamão papaia picado',
      '1 xícara de morangos picados',
      '1 banana prata picada',
      '1 laranja picada (sem a parte branca)',
      'Suco de 1/2 limão',
      'Folhas de hortelã a gosto (opcional)',
    ],
    modo_preparo: [
      'Lave bem todas as frutas.',
      'Pique as frutas em tamanhos similares.',
      'Em uma tigela grande, misture delicadamente todas as frutas picadas.',
      'Regue com o suco de limão.',
      'Se desejar, adicione folhas de hortelã picadas para um toque refrescante.',
      'Sirva imediatamente ou leve à geladeira por alguns minutos.',
    ],
  },
  {
    id: 'arroz-feijao',
    nome: 'Arroz com Feijão Simples',
    ingredientes: [
      '2 xícaras de arroz branco',
      '4 xícaras de água',
      '1 colher de sopa de óleo',
      '1/2 cebola picada',
      '2 dentes de alho picados',
      'Sal a gosto',
      '2 xícaras de feijão cozido',
      'Louro a gosto (opcional)',
    ],
    modo_preparo: [
      'Lave bem o arroz.',
      'Em uma panela, aqueça o óleo e refogue a cebola e o alho.',
      'Adicione o arroz e refogue por alguns minutos.',
      'Acrescente a água e o sal. Deixe ferver, depois abaixe o fogo e cozinhe com a panela tampada até a água secar.',
      'Enquanto o arroz cozinha, aqueça o feijão cozido em outra panela.',
      'Se desejar, adicione um pouco mais de tempero e uma folha de louro ao feijão.',
      'Sirva o arroz quente com o feijão.',
    ],
  },
  {
    id: 'mousse-maracuja',
    nome: 'Mousse de Maracujá Cremoso',
    ingredientes: [
      '1 lata de leite condensado',
      '1 lata de creme de leite',
      '1 xícara de suco concentrado de maracujá',
    ],
    modo_preparo: [
      'No liquidificador, coloque o leite condensado, o creme de leite e o suco de maracujá.',
      'Bata por cerca de 2 minutos, até obter uma mistura homogênea e cremosa.',
      'Despeje a mousse em taças individuais ou em um recipiente maior.',
      'Leve à geladeira por pelo menos 2 horas antes de servir.',
      'Se desejar, decore com sementes de maracujá.',
    ],
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { receita: item })}
          >
            <Text style={styles.recipeName}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetalhesScreen({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{receita.nome}</Text>
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index} style={styles.item}>• {item}</Text>
      ))}
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      {receita.modo_preparo.map((item, index) => (
        <Text key={index} style={styles.item}>{index + 1}. {item}</Text>
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  recipeName: {
    fontSize: 18,
  },
  sectionTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  item: {
    marginVertical: 4,
    fontSize: 16,
  },
});
