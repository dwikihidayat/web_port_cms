import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  // Bypass Supabase initialization when using dummy data
  return NextResponse.next({
    request,
  });
}
