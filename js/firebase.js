document.addEventListener('DOMContentLoaded', function() {
     // firebase.js conexao com a firebase BD google
     var firebaseConfig = {
          apiKey: "AIzaSyDohCeHRGxRiO4sfN9pOFHVUqe01cuzUEg",
          authDomain: "systuinfo.firebaseapp.com",
          databaseURL: "https://systuinfo-default-rtdb.firebaseio.com",
          projectId: "systuinfo",
          storageBucket: "systuinfo.appspot.com",
          messagingSenderId: "604412345972",
          appId: "1:604412345972:web:96338d9c4f5853d1765b21"
     };
     
     // Inicialize o Firebase
     firebase.initializeApp(firebaseConfig);
     export { firebaseConfig };
});
