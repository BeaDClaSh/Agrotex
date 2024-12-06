import {serve} from 'bun';

serve({
    port: 3000, // Порт для бэкенда
    fetch(request) {
        const url = new URL(request.url);

        // Заголовки CORS
        const headers = {
            'Access-Control-Allow-Origin': 'http://localhost:5173', // Разрешение доступов с фронтенда
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers });
        }

        // Основной обработчик запросов
        try {
            // Тут логика обработки запросов, например, к API
            return new Response('Hello from Bun!', { headers });
        } catch (e) {
            return new Response('Internal server error', { status: 500, headers });
        }
    },
});
