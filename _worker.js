export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    
    // Pages that require login
    const protectedPaths = ['/portal']
    const isProtected = protectedPaths.some(path => url.pathname === path || url.pathname.startsWith(path))
    
    if (isProtected) {
      // Check for the exact Supabase cookie
      const cookies = request.headers.get('Cookie') || ''
      const hasSession = cookies.includes('sb-rtmewagtvmubpushnzag-auth-token')
      
      if (!hasSession) {
        return Response.redirect(new URL('/login', request.url), 302)
      }
    }
    
    return env.ASSETS.fetch(request)
  }
}
