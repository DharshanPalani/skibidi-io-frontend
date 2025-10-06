const usePlayerAuth = (username : string) => {
  if(username == "" || username == null) {
    alert("Enter a username");
  } else {
    window.location.href = '/game-menu';
  }
}

export default usePlayerAuth;
