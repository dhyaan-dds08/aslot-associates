import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient(true)
    
    // Get the request body
    const body = await request.json()
    const { id, active } = body

    // Validate input
    if (!id || typeof active !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request. ID and active status required.' },
        { status: 400 }
      )
    }

    // Update the post
    const { data, error } = await supabase
      .from('posts')
      .update({ active, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Toggle error:', error)
      return NextResponse.json(
        { error: 'Failed to update post status' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      post: data,
      message: `Post ${active ? 'activated' : 'deactivated'} successfully`
    })

  } catch (error) {
    console.error('Toggle API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}