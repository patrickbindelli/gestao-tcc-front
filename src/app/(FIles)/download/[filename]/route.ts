type GetParams = {
  params: {
    filename: string;
  };
};

export async function GET(req: Request, { params }: GetParams) {
  const filename = params.filename;

  const DUMMY_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/media/${filename}`;

  const response = await fetch(DUMMY_URL);

  return new Response(response.body, {
    headers: {
      ...response.headers,
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
}
