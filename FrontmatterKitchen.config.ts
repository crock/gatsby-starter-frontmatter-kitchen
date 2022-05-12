

const config: IFrontmatterKitchenConfig = {
    siteUrl: "https://frontmatter.kitchen",
    commentSystem: false, // disqus, jamcomments, or false to disable
    analytics: {
        disableAll: true,
        services: {
            google: {
                disabled: false,
                universalTrackingId: "",
                tagManagerGlobalId: ""
            },
            splitbee: {
                disabled: false,
            },
        }
    },
    advertising: {
        disableAll: true,
        services: {
            adsense: {
                clientId: ""
            }
        }
    }
}

/* DO NOT EDIT BELOW THIS LINE */
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
type CommentSystem = "disqus" | "jamcomments" | false

type GAProperties = {
    disabled?: boolean,
    universalTrackingId?: string,
    tagManagerGlobalId?: string
}

interface AnalyticSystems {
    google: GAProperties,
    splitbee: {
        disabled: boolean,
    }
}

interface Analytics {
    disableAll: boolean,
    services: AnalyticSystems
}

interface Advertising {
    disableAll: boolean,
    services: {
        adsense: {
            disabled?: boolean
            clientId: string
        }
    }
}

interface IFrontmatterKitchenConfig {
    siteUrl: string,
    commentSystem: CommentSystem,
    analytics: Analytics,
    advertising: Advertising,
}

export default config