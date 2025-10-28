import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, mensaje, newsletter } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son requeridos.' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido.' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con servicios como:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - O guardar en una base de datos

    // Por ahora, solo logueamos (en producción conectarías con tu servicio de email)
    console.log('📧 Nuevo mensaje de contacto:', {
      nombre,
      email,
      mensaje,
      newsletter,
      timestamp: new Date().toISOString(),
    });

    // Simular envío exitoso
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
