// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


export function fetchMockData() {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: 'mock data' }), 500)
  );
}
