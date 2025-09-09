import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MainController::home
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\NoticiaController::editarNoticia
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
export const editarNoticia = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarNoticia.url(args, options),
    method: 'post',
})

editarNoticia.definition = {
    methods: ["post"],
    url: '/noticia/{categoria}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticiaController::editarNoticia
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
editarNoticia.url = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoria: args.categoria,
                }

    return editarNoticia.definition.url
            .replace('{categoria}', parsedArgs.categoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticiaController::editarNoticia
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
editarNoticia.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarNoticia.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticiaController::editarNoticia
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
    const editarNoticiaForm = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editarNoticia.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticiaController::editarNoticia
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
        editarNoticiaForm.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editarNoticia.url(args, options),
            method: 'post',
        })
    
    editarNoticia.form = editarNoticiaForm
/**
* @see \App\Http\Controllers\NoticiaController::salvarNoticia
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
export const salvarNoticia = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarNoticia.url(args, options),
    method: 'post',
})

salvarNoticia.definition = {
    methods: ["post"],
    url: '/noticia/{categoria}/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticiaController::salvarNoticia
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
salvarNoticia.url = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoria: args.categoria,
                }

    return salvarNoticia.definition.url
            .replace('{categoria}', parsedArgs.categoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticiaController::salvarNoticia
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
salvarNoticia.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarNoticia.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticiaController::salvarNoticia
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
    const salvarNoticiaForm = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvarNoticia.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticiaController::salvarNoticia
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
        salvarNoticiaForm.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvarNoticia.url(args, options),
            method: 'post',
        })
    
    salvarNoticia.form = salvarNoticiaForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \App\Http\Controllers\UserController::salvarUsuario
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
export const salvarUsuario = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarUsuario.url(options),
    method: 'post',
})

salvarUsuario.definition = {
    methods: ["post"],
    url: '/usuarios/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::salvarUsuario
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
salvarUsuario.url = (options?: RouteQueryOptions) => {
    return salvarUsuario.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::salvarUsuario
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
salvarUsuario.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarUsuario.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::salvarUsuario
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
    const salvarUsuarioForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvarUsuario.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::salvarUsuario
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
        salvarUsuarioForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvarUsuario.url(options),
            method: 'post',
        })
    
    salvarUsuario.form = salvarUsuarioForm
/**
* @see \App\Http\Controllers\UserController::editarUsuario
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
export const editarUsuario = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarUsuario.url(args, options),
    method: 'post',
})

editarUsuario.definition = {
    methods: ["post"],
    url: '/usuarios/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::editarUsuario
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
editarUsuario.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editarUsuario.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::editarUsuario
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
editarUsuario.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarUsuario.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::editarUsuario
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
    const editarUsuarioForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editarUsuario.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::editarUsuario
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
        editarUsuarioForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editarUsuario.url(args, options),
            method: 'post',
        })
    
    editarUsuario.form = editarUsuarioForm
/**
* @see \App\Http\Controllers\UserController::removerUsuario
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
export const removerUsuario = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerUsuario.url(args, options),
    method: 'post',
})

removerUsuario.definition = {
    methods: ["post"],
    url: '/usuarios/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::removerUsuario
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
removerUsuario.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return removerUsuario.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::removerUsuario
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
removerUsuario.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerUsuario.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::removerUsuario
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
    const removerUsuarioForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: removerUsuario.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::removerUsuario
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
        removerUsuarioForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: removerUsuario.url(args, options),
            method: 'post',
        })
    
    removerUsuario.form = removerUsuarioForm
/**
* @see \App\Http\Controllers\DocumentoController::salvarDocumento
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
export const salvarDocumento = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarDocumento.url(options),
    method: 'post',
})

salvarDocumento.definition = {
    methods: ["post"],
    url: '/documentos/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::salvarDocumento
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
salvarDocumento.url = (options?: RouteQueryOptions) => {
    return salvarDocumento.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentoController::salvarDocumento
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
salvarDocumento.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarDocumento.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::salvarDocumento
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
    const salvarDocumentoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvarDocumento.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::salvarDocumento
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
        salvarDocumentoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvarDocumento.url(options),
            method: 'post',
        })
    
    salvarDocumento.form = salvarDocumentoForm
/**
* @see \App\Http\Controllers\DocumentoController::editarDocumento
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
export const editarDocumento = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarDocumento.url(args, options),
    method: 'post',
})

editarDocumento.definition = {
    methods: ["post"],
    url: '/documentos/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::editarDocumento
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
editarDocumento.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editarDocumento.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentoController::editarDocumento
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
editarDocumento.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarDocumento.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::editarDocumento
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
    const editarDocumentoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editarDocumento.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::editarDocumento
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
        editarDocumentoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editarDocumento.url(args, options),
            method: 'post',
        })
    
    editarDocumento.form = editarDocumentoForm
/**
* @see \App\Http\Controllers\DocumentoController::removerDocumento
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
export const removerDocumento = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerDocumento.url(args, options),
    method: 'post',
})

removerDocumento.definition = {
    methods: ["post"],
    url: '/documentos/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::removerDocumento
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
removerDocumento.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return removerDocumento.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentoController::removerDocumento
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
removerDocumento.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerDocumento.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::removerDocumento
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
    const removerDocumentoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: removerDocumento.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::removerDocumento
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
        removerDocumentoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: removerDocumento.url(args, options),
            method: 'post',
        })
    
    removerDocumento.form = removerDocumentoForm
/**
* @see \App\Http\Controllers\ComponenteController::salvarComponente
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
export const salvarComponente = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarComponente.url(args, options),
    method: 'post',
})

salvarComponente.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::salvarComponente
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
salvarComponente.url = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { componente: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                }

    return salvarComponente.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::salvarComponente
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
salvarComponente.post = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarComponente.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::salvarComponente
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
    const salvarComponenteForm = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvarComponente.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::salvarComponente
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
        salvarComponenteForm.post = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvarComponente.url(args, options),
            method: 'post',
        })
    
    salvarComponente.form = salvarComponenteForm
/**
* @see \App\Http\Controllers\ComponenteController::editarComponente
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
export const editarComponente = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarComponente.url(args, options),
    method: 'post',
})

editarComponente.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::editarComponente
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
editarComponente.url = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                                id: args.id,
                }

    return editarComponente.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::editarComponente
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
editarComponente.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarComponente.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::editarComponente
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
    const editarComponenteForm = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editarComponente.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::editarComponente
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
        editarComponenteForm.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editarComponente.url(args, options),
            method: 'post',
        })
    
    editarComponente.form = editarComponenteForm
/**
* @see \App\Http\Controllers\ComponenteController::removerComponente
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
export const removerComponente = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerComponente.url(args, options),
    method: 'post',
})

removerComponente.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::removerComponente
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
removerComponente.url = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                                id: args.id,
                }

    return removerComponente.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::removerComponente
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
removerComponente.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerComponente.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::removerComponente
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
    const removerComponenteForm = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: removerComponente.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::removerComponente
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
        removerComponenteForm.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: removerComponente.url(args, options),
            method: 'post',
        })
    
    removerComponente.form = removerComponenteForm
/**
* @see \App\Http\Controllers\ProcessoController::salvarProcesso
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
export const salvarProcesso = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarProcesso.url(options),
    method: 'post',
})

salvarProcesso.definition = {
    methods: ["post"],
    url: '/processos/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::salvarProcesso
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
salvarProcesso.url = (options?: RouteQueryOptions) => {
    return salvarProcesso.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::salvarProcesso
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
salvarProcesso.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvarProcesso.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::salvarProcesso
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
    const salvarProcessoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvarProcesso.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::salvarProcesso
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
        salvarProcessoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvarProcesso.url(options),
            method: 'post',
        })
    
    salvarProcesso.form = salvarProcessoForm
/**
* @see \App\Http\Controllers\ProcessoController::editarProcesso
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
export const editarProcesso = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarProcesso.url(args, options),
    method: 'post',
})

editarProcesso.definition = {
    methods: ["post"],
    url: '/processos/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::editarProcesso
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
editarProcesso.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editarProcesso.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::editarProcesso
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
editarProcesso.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editarProcesso.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::editarProcesso
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
    const editarProcessoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editarProcesso.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::editarProcesso
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
        editarProcessoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editarProcesso.url(args, options),
            method: 'post',
        })
    
    editarProcesso.form = editarProcessoForm
/**
* @see \App\Http\Controllers\ProcessoController::removerProcesso
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
export const removerProcesso = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerProcesso.url(args, options),
    method: 'post',
})

removerProcesso.definition = {
    methods: ["post"],
    url: '/processos/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::removerProcesso
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
removerProcesso.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return removerProcesso.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::removerProcesso
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
removerProcesso.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removerProcesso.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::removerProcesso
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
    const removerProcessoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: removerProcesso.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::removerProcesso
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
        removerProcessoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: removerProcesso.url(args, options),
            method: 'post',
        })
    
    removerProcesso.form = removerProcessoForm
/**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:52
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
export const appearance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
appearance.url = (options?: RouteQueryOptions) => {
    return appearance.definition.url + queryParams(options)
}

/**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
appearance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})
/**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
appearance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appearance.url(options),
    method: 'head',
})

    /**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
    const appearanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: appearance.url(options),
        method: 'get',
    })

            /**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
        appearanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: appearance.url(options),
            method: 'get',
        })
            /**
 * @see routes/settings.php:21
 * @route '/settings/appearance'
 */
        appearanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: appearance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    appearance.form = appearanceForm
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm