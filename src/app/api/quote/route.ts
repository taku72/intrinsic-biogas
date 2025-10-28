import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      fullName, 
      email, 
      phone, 
      location, 
      siteType, 
      wasteType, 
      estimatedWaste, 
      additionalComments 
    } = body

    // Validate required fields
    if (!fullName || !email || !phone || !location || !siteType || !wasteType || !estimatedWaste) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email to sales team
    // 2. Save to CRM system
    // 3. Generate quote automatically
    // 4. Send confirmation email to customer
    
    // For now, we'll just log the data
    console.log('Quote request submission:', {
      fullName,
      email,
      phone,
      location,
      siteType,
      wasteType,
      estimatedWaste,
      additionalComments,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))

    return NextResponse.json(
      { message: 'Quote request submitted successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
