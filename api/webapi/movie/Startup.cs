using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(movie.Startup))]
namespace movie
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
