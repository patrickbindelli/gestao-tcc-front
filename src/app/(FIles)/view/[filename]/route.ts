type GetParams = {
  params: {
    filename: string;
  };
};

export async function GET(req: Request, { params }: GetParams) {
  const filename = params.filename;

  const DUMMY_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/media/${filename}`;

  const response = await fetch(DUMMY_URL);

  const headers: Headers = new Headers({
    ...response.headers,
    "content-disposition": `inline; filename="${filename}"`,
    "content-type": "application/pdf",
  });

  if (filename.endsWith(".pdf")) {
    headers.set("content-type", "application/pdf");
  }

  return new Response(response.body, {
    headers,
  });
}
