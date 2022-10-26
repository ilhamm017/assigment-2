# KS04-kelompok4-finalProject1

Aplikasi Reflection yang dimana aplikasi ini digunakan untuk mencatat dan mengukur target-target pencapaian seseorang.

# Installation

1.  Clone repository
2.  Masuk direktory hasil clone
3.  Jalankan terminal lalu `npm install` untuk melakukan instalasi module yang dibutuhkan
4.  Buka file *config.json* pada direktory **config** lalu sesuaikan
5.  Jalankan `npm run prepareDb` untuk membuat database
6.  Lalu `npm start` untuk menjalankan server

# Usage

1.  ## Register
    
    ```javascript
    //method POST 
    /api/v1/users/register
    ```
    
    Contoh :
    
    ![009ee394d62aada47c8f341b79ac4453.png](../master/_resources/009ee394d62aada47c8f341b79ac4453.png)
    
    ### Jika menggunakan email yang sama maka akan terjadi error 
    
    ### ![b3527babf2dc116cd4fba77476d3ef52.png](../master/_resources/b3527babf2dc116cd4fba77476d3ef52.png)
    
2.  ## Login
    
    ```js
    //method POST 
    /api/v1/users/login
    ```
    
    ### Contoh :
    ![cb689b30ebaaf052b71aa773f2ebcf1e.png](../master/_resources/cb689b30ebaaf052b71aa773f2ebcf1e.png)z
    Jika menggunakan password atau email yang salah 
    
    |     |
    | --- |
    | ![7f035202feaa5ff01b7caa1b462e0960.png](../master/_resources/7f035202feaa5ff01b7caa1b462e0960.png) |
    | ![29b318b4ddc948a48cd92eec3c37cf8e.png](../master/_resources/29b318b4ddc948a48cd92eec3c37cf8e.png) |
    
3.  ##  Create Reflection
    
    ```js
    //method GET 
    /api/v1/reflections
    ```
    
    |     |
    | --- |
    | ![ef3984f82453320983f1370fae6ccad8.png](../master/_resources/ef3984f82453320983f1370fae6ccad8.png) |
    | ![daad4d97e4d6b9fadfd7281d465521d4.png](../master/_resources/daad4d97e4d6b9fadfd7281d465521d4.png) |
    
    ### 
    Ketika Memasukkan **Token** yang salah 
    ![1ed212cef42a5840a7014a25aebe4be8.png](../master/_resources/1ed212cef42a5840a7014a25aebe4be8.png)
    
4.  ## Get all Reflections
    
    ```js
    //method POST 
    /api/v1/reflections
    ```
    
    Contoh :
    ![4c13f815f9c8fc1b0207d3d1419ec900.png](../master/_resources/4c13f815f9c8fc1b0207d3d1419ec900.png)
    
5.  ## Update Reflection
    
    ```js
    //method PUT 
    /api/v1/reflection/:id
    ```
    
    Contoh : 
    
    |     |
    | --- |
    | ![77686526eda699fe3bf6186be4aef11d.png](../master/_resources/77686526eda699fe3bf6186be4aef11d.png) |
    | ![f1eb9344dd7ccf11d7766e4507551939.png](../master/_resources/f1eb9344dd7ccf11d7766e4507551939.png) |
    
6.  ## Delete Reflection
    
    ```js
    //method DELETE 
    /api/v1/reflections/:id
    ```
    
    Contoh :
    
    |     |
    | --- |
    | ![85302c88b840dce9a51768177fded0b0.png](../master/_resources/85302c88b840dce9a51768177fded0b0.png) |
    | ![815b52d46c0836a7accb94684a426d92.png](../master/_resources/815b52d46c0836a7accb94684a426d92.png) |
