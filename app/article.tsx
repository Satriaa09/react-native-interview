import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

interface ArticleProps {
  imageSource: any;
  category: string;
  title: string;
  timeAgo: string;
  readTime: string;
  isi: string;
}

const ArticleItem: React.FC<ArticleProps> = ({ imageSource, category, title, timeAgo, readTime, isi }) => {
  return (
    <View style={styles.articleCardHome2}>
      <Image style={styles.articleImageHome2} source={imageSource} />
      <Text style={styles.textAboveTitle}>{category}</Text>
      <Text style={styles.articleTitleHome2}>{title}</Text>
      <Text style={styles.textBelowTitle}>
        {timeAgo} <Text style={styles.bullet}>•</Text> {readTime}
      </Text>
      <Text style={styles.articleText}>{isi}</Text>
    </View>
  );
};

const Article: React.FC = () => {
  return (
    <ScrollView style={styles.containerHome2}>
      <ArticleItem
        imageSource={require('../img/Gambar1.png')}
        category="TECH"
        title="Tips Hebat Android Developer"
        timeAgo="1 JAM YANG LALU"
        readTime="5 menit waktu baca"
        isi="Menjadi pengembang Android yang sukses membutuhkan keterampilan teknis yang kuat serta pemahaman mendalam tentang ekosistem Android dan praktik terbaik dalam pengembangan aplikasi. Langkah pertama yang krusial adalah mempelajari dasar-dasar Kotlin, bahasa pemrograman utama untuk pengembangan Android yang menawarkan fitur modern seperti null safety, extension functions, dan coroutines yang membuat penulisan kode lebih bersih dan efisien. Selain itu, manfaatkan Android Jetpack, kumpulan library yang membantu pengembang mengikuti praktik terbaik dan membuat aplikasi yang lebih stabil dengan mengurangi boilerplate code. Penting juga untuk mengikuti panduan desain Material yang dikembangkan oleh Google guna menciptakan antarmuka pengguna yang konsisten dan intuitif, memastikan tampilan dan nuansa aplikasi yang menarik serta pengalaman pengguna yang lebih baik.

        Kinerja aplikasi adalah kunci dalam pengembangan aplikasi mobile, sehingga penggunaan alat seperti Android Profiler untuk mengidentifikasi dan mengatasi bottleneck kinerja sangat dianjurkan. Optimalkan penggunaan memori, kurangi waktu respon UI, dan pastikan aplikasi Anda berjalan dengan lancar di berbagai perangkat. Automasi dan integrasi berkelanjutan menggunakan alat seperti Gradle untuk mengotomatisasi build dan Jenkins atau GitHub Actions untuk Continuous Integration (CI) dapat meningkatkan efisiensi pengembangan, membantu mengidentifikasi masalah lebih awal dan memastikan kode Anda selalu siap untuk dirilis. Pengujian yang menyeluruh juga penting; gunakan framework pengujian seperti Espresso untuk UI testing dan JUnit untuk unit testing, menulis tes yang mencakup berbagai skenario penggunaan aplikasi untuk memastikan stabilitas dan kualitas aplikasi.

        Tetap terupdate dengan tren dan teknologi baru adalah hal yang sangat penting dalam dunia pengembangan Android yang terus berkembang. Ikuti blog resmi Android Developers, tonton video dari konferensi seperti Google I/O, dan ikuti kursus online untuk tetap terupdate dengan teknologi dan tren terbaru. Bergabung dengan komunitas pengembang, baik online maupun offline, dapat memberikan banyak manfaat, seperti forum Stack Overflow, GitHub, dan subreddit AndroidDev yang menjadi tempat yang baik untuk berdiskusi, bertanya, dan belajar dari pengembang lain. Menghadiri meetups dan konferensi juga dapat membantu memperluas jaringan profesional Anda. Selain itu, mengembangkan proyek sampingan merupakan cara yang baik untuk bereksperimen dengan teknologi baru dan meningkatkan keterampilan Anda, sekaligus menjadi portofolio yang baik untuk menunjukkan kemampuan Anda kepada calon pemberi kerja atau klien. Terakhir, fokuslah selalu pada pengguna saat mengembangkan aplikasi, buatlah aplikasi yang mudah digunakan, responsif, dan menyenangkan, serta gunakan feedback dari pengguna untuk terus memperbaiki aplikasi Anda dan memberikan pengalaman terbaik. Dengan mengikuti tips ini dan berkomitmen untuk terus belajar dan berkembang, Anda dapat menciptakan aplikasi Android yang luar biasa dan sukses dalam karir pengembangan Anda."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerHome2: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  articleCardHome2: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  articleImageHome2: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 30,
  },
  articleTitleHome2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAboveTitle: {
    color: 'red',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10, 
  },
  textBelowTitle: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  bullet: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  articleText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    marginTop: 10,
    textAlign: 'justify',
  },
});

export default Article;
