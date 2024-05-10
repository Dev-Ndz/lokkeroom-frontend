import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  /* 
  Problème assez difficile à régler, car besoin de changer le backend,
  En fait j'ai essayer de faire en sorte que si le jwtToken dans le local storage existe,
  alors on peut load la page home car la maintenant quand je suis connecté, si j'essaye de refresh alors je retourne sur login
  Seulement j'ai vu que lorsque tu te log, tu donnes bien plus d'info au useContext que d'infos que t'écris dans le localStorage
  ce qui fait que c'est impossible de récupérer les infos lorsque t'es loggué même si y a le jwt.
  Je rajouterai juste au useEffect en dessous une fonction qui vient vérifier que le jwt n'est pas expiré
  ce que j'aurais fait pour ça, c'est lorsque tu écris dans le localstorage dans le backend de rajouté dans l'objet que t'écris :
  {"expires":heures+2} comme ça au front tu peux juste comparer et si ça fait plus de deux heures qu'il est log alors tu peux clearlocalstorage et retourner vers login

  useEffect(() => {
    const authToken = localStorage.getItem("jwtToken");
    if (authToken) setAuth({JSON.stringify(authToken)});
    else {
      return;
    }
  });
  */
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
