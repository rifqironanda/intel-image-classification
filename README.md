# Intel Image Classification

Proyek ini merupakan implementasi sistem klasifikasi citra menggunakan Deep Learning berbasis Convolutional Neural Network (CNN) pada dataset **Intel Image Classification** dari Kaggle. Model yang telah dilatih kemudian dikonversi ke beberapa format deployment yaitu:

- TensorFlow/Keras (`.keras`)
- TensorFlow Lite (`.tflite`)
- TensorFlow.js (`model.json`)

Selain itu, proyek ini dilengkapi dengan aplikasi web sederhana berbasis **React + Vite** untuk melakukan inferensi gambar secara langsung menggunakan TensorFlow.js di browser.

---

## Dataset

Dataset yang digunakan berasal dari Kaggle:

**Intel Image Classification**

https://www.kaggle.com/datasets/puneet6060/intel-image-classification

Dataset terdiri dari 6 kelas:

| Kelas | Deskripsi |
|---------|---------|
| Buildings | Bangunan |
| Forest | Hutan |
| Glacier | Gletser |
| Mountain | Pegunungan |
| Sea | Laut |
| Street | Jalan |

---

## Struktur Folder

PROYEK-KLASSIFIKASI
│
├── dataset/
│
├── Dataset-Final-img/
│
├── intel/
│
├── my-app/                     # Aplikasi React + Vite
│   ├── public/
│   ├── src/
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── node_modules/
│
├── saved_model/                # SavedModel TensorFlow
│
├── tfjs_model/                 # Model TensorFlow.js
│   ├── model.json
│   └── *.bin
│
├── tflite/
│   ├── intel_model.tflite
│   ├── 73.jpg
│   ├── requirements.txt
│   └── test_tflite.ipynb
│
├── venv/
│
├── best_model_intel.keras      # Model hasil training
├── intel_model_final.keras    # model final
│
├── klassifikasi-gambar_intel-image.ipynb
│
├── hasil prediksi dengan tfjs_model- react.png     # tampilan website
│
├── README.md
│
├── hasil_prediksi.csv
│
└── requirements.txt
```

---

# Tahapan Proyek

## 1. Pelatihan Model

Notebook:

```text
klassifikasi-gambar_intel-image.ipynb
```

Notebook ini digunakan untuk:

- Memuat dataset Intel Image Classification
- Melakukan preprocessing gambar
- Membuat CNN model
- Melatih model
- Evaluasi model
- Menyimpan model terbaik

Output:

```text
best_model_intel.keras
intel_model_final.keras

```

---

## 2. Konversi Model TensorFlow Lite

Model hasil training dikonversi menjadi TensorFlow Lite agar dapat digunakan pada perangkat edge atau mobile.

Output:

```text
tflite/intel_model.tflite
```

---

## 3. Pengujian TensorFlow Lite

Notebook:

```text
test_tflite.ipynb
```

Notebook ini digunakan untuk:

- Memuat model `.tflite`
- Menjalankan TensorFlow Lite Interpreter
- Melakukan inferensi gambar
- Menampilkan hasil prediksi

Alur:

```text
Gambar Input
      ↓
Preprocessing
      ↓
TensorFlow Lite Interpreter
      ↓
Prediksi Kelas
      ↓
Visualisasi Hasil
```

---

## 4. Konversi TensorFlow.js

Model Keras dikonversi ke TensorFlow.js menggunakan:
yang dilakukan dalam env google colab: https://colab.research.google.com/drive/1WVcy6ex5UohoGoFiHYergWhmTiFj4iAU?usp=sharing 

```bash
tensorflowjs_converter \
--input_format=keras \
best_model_intel.keras \
tfjs_model
```

Output:

```text
tfjs_model/
├── model.json
└── group1-shard*.bin
```

---

## 5. Web Deployment (React + Vite)

Folder:

```text
my-app/
```

Aplikasi web sederhana yang memungkinkan pengguna:

- Upload gambar
- Menampilkan preview gambar
- Melakukan inferensi menggunakan TensorFlow.js
- Menampilkan kelas prediksi

Arsitektur:

```text
User Upload Image
        ↓
React Frontend
        ↓
TensorFlow.js
        ↓
Load model.json
        ↓
Prediction
        ↓
Display Result
```

---

# Instalasi

## Clone Repository

```bash
git clone <repository-url>
cd PROYEK-KLASSIFIKASI
```

---

## Membuat Virtual Environment

Windows:

```bash
python -m venv venv

venv\Scripts\activate
```

Linux/Mac:

```bash
python -m venv venv

source venv/bin/activate
```

---

## Install Dependency Python

```bash
pip install -r requirements.txt
```

---

## Menjalankan Notebook

```bash
jupyter notebook
```

Buka:

```text
klassifikasi-gambar_intel-image.ipynb
```

atau

```text
test_tflite.ipynb
```

---

# Menjalankan Web React

Masuk ke folder aplikasi:

```bash
cd my-app
```

Install dependency:

```bash
npm install
```

Jalankan:

```bash
npm run dev
```

Output:

```text
http://localhost:5173
```

---

# Dependency Utama

## Python

- TensorFlow
- TensorFlow Lite
- TensorFlow.js
- NumPy
- Pandas
- Matplotlib
- OpenCV
- Pillow
- Scikit-Learn

---

## Frontend

- React
- Vite
- TensorFlow.js

Install TensorFlow.js:

```bash
npm install @tensorflow/tfjs
```

---

# Kelas Prediksi

```python
class_names = [
    "buildings",
    "forest",
    "glacier",
    "mountain",
    "sea",
    "street"
]
```

---

# Contoh Alur Penggunaan

## TensorFlow Lite

```text
1. Buka test_tflite.ipynb
2. Load intel_model.tflite
3. Upload gambar
4. Jalankan inferensi
5. Lihat hasil prediksi
```

---

## TensorFlow.js Web

```text
1. Jalankan React App
2. Upload gambar
3. Model TensorFlow.js dimuat
4. Prediksi dilakukan di browser
5. Hasil kelas ditampilkan
```

---

# Hasil

Model mampu mengklasifikasikan gambar ke dalam enam kategori lingkungan:

- Buildings
- Forest
- Glacier
- Mountain
- Sea
- Street

Model tersedia dalam tiga format deployment:

| Format | File |
|----------|----------|
| Keras | best_model_intel.keras |
| TensorFlow Lite | intel_model.tflite |
| TensorFlow.js | model.json |

---

# Author

Nama: Rifqi Afta Ronanda

Proyek Deep Learning untuk klasifikasi citra lingkungan menggunakan TensorFlow, TensorFlow Lite, dan TensorFlow.js.