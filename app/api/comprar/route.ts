import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      nombre,
      apellido,
      cedula,
      telefono,
      direccion,
      correo,
      paquete,
    } = body;

    // CREAR COMPRA
    const { data: compra, error: compraError } =
      await supabase
        .from("compras")
        .insert([
          {
            nombre,
            apellido,
            cedula,
            telefono,
            direccion,
            correo,
            tickets: paquete.tickets,
            numeros: paquete.numeros,
            valor: paquete.valor,
            estado: "pendiente",
          },
        ])
        .select()
        .single();

    if (compraError) {
      return NextResponse.json(
        { error: compraError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      compra,
    });

  } catch (error) {

    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    );

  }

}