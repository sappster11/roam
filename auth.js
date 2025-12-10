function signOut() {
  // Clear the auth cookie
  document.cookie = 'sb-rtmewagtvmubpushnzag-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  
  // Redirect to home
  window.location.href = '/'
}

window.signOut = signOut

console.log('Sign out ready')
