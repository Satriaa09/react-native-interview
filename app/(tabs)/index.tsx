import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import styles from '../style';

interface Article {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

const articles: Article[] = [
  { id: '1', title: 'Tips Hebat Android Developer', image: require('../../img/Gambar1.png') },
  { id: '2', title: 'Tips Hebat Android Developer2', image: require('../../img/Gambar1.png') },
  { id: '3', title: 'Tips Hebat Android Developer3', image: require('../../img/Gambar1.png') },
  { id: '4', title: 'Tips Hebat Android Developer4', image: require('../../img/Gambar1.png') },
];

const categories = ['Semua', 'Tech', 'Finance', 'Business', 'Innovation'];

const HomeScreen: React.FC = () => {
  const renderArticles = () => {
    return articles.map((article) => (
      <TouchableOpacity key={article.id} style={styles.articleCard}>
        <Image source={article.image} style={styles.articleImage} />
        <Text style={styles.articleTitle}>{article.title}</Text>
      </TouchableOpacity>
    ));
  };

  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.category}>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ));
  };

  const renderArticleList = () => {
    return articles.map((article) => (
      <View key={article.id} style={styles.articleList}>
        <Image source={article.image} style={styles.articleListImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleListTitle}>{article.title}</Text>
          <Text style={styles.articleListDescription}>Deskripsi artikel</Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.navIconContainer}>
          <TouchableOpacity>
            <Image source={require('../../img/google.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.navIconContainer}>
          <TouchableOpacity>
            <Image source={require('../../img/notification.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Artikel Terbaru</Text>
        </View>
        <Text style={styles.description}>Rekomendasi artikel terbaru setiap harinya, untuk Anda</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContainer}>
        <View style={styles.articlesContainer}>
          {renderArticles()}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomTitle}>Mengikuti</Text>
          <Text style={styles.bottomDescription}>Topik Terbaik yang Anda Ikuti</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.bottomLink}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {renderCategories()}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.containerList}>
        {renderArticleList()}
      </ScrollView>

    </View>
  );
};

export default HomeScreen;
