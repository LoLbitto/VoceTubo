<!DOCTYPE html>

<html lang="pt-br">
    <head>
        @yield('js')

        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
                input::-ms-reveal {
                    filter: invert(100%);
                }
            }
        </style>
    </head>
    <body>
        @yield('content')
    </body>
</html>
