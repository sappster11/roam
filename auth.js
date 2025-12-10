import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabase = createClient('https://rtmewagtvmubpushnzag.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bWV3YWd0dm11YnB1c2huemFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNDM2OTgsImV4cCI6MjA4MDgxOTY5OH0.jIdiAKJW4SUhAjOx-qw1g4EL8eMWsnhD_e9fqX8QUUs')

// Sign out function
async function signOut() {
  await supabase.auth.signOut()
  
  // Clear the auth cookie
  document.cookie = 'sb-rtmewagtvmubpushnzag-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  
  // Redirect to home page
  window.location.href = '/'
}

// Make it available globally
window.signOut = signOut
