import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabase = createClient('https://rtmewagtvmubpushnzag.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bWV3YWd0dm11YnB1c2huemFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNDM2OTgsImV4cCI6MjA4MDgxOTY5OH0.jIdiAKJW4SUhAjOx-qw1g4EL8eMWsnhD_e9fqX8QUUs')

// Sign out function
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Error signing out:', error)
    alert('Error signing out. Please try again.')
  } else {
    // Redirect to home page after logout
    window.location.href = '/index.html'
  }
}

// Make it available globally
window.signOut = signOut
