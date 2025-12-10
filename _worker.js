export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    
    // Pages that require login
    const protectedPaths = ['/portal', '/client-dashboard']
    const isProtected = protectedPaths.some(path => url.pathname === path || url.pathname.startsWith(path.replace('.html', '')))
    
    if (isProtected) {
      // Check for Supabase session cookie
      const cookies = request.headers.get('Cookie') || ''
      const sessionMatch = cookies.match(/sb-[^-]+-auth-token=([^;]+)/)
      
      if (!sessionMatch) {
        return Response.redirect(new URL('/login.html', request.url), 302)
      }
      
      const token = sessionMatch[1]
      
      // Verify with Supabase
      const verifyResponse = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'apikey': env.SUPABASE_ANON_KEY
        }
      })
      
      if (!verifyResponse.ok) {
        return Response.redirect(new URL('/login.html', request.url), 302)
      }
    }
    
    return env.ASSETS.fetch(request)
  }
}
