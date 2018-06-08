<?php

/* themes/news_zymphonies_theme/templates/layout/page.html.twig */
class __TwigTemplate_fb1ba23ee639b51141380ddaf9e30bc6e9ab0c26d7efef1969ff3f42d2743740 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 62, "for" => 296);
        $filters = array("raw" => 297, "date" => 491);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('raw', 'date'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 60
        echo "

";
        // line 62
        if (($this->getAttribute(($context["page"] ?? null), "contact_email", array()) || $this->getAttribute(($context["page"] ?? null), "top_menu", array()))) {
            // line 63
            echo "  <div class=\"top-menu\">
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Contact Phone & Email -->

        <div class=\"col-sm-9\">
          
          <div class=\"top-blocks\">
            ";
            // line 72
            if ($this->getAttribute(($context["page"] ?? null), "top_menu", array())) {
                // line 73
                echo "              ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "top_menu", array()), "html", null, true));
                echo "
            ";
            }
            // line 75
            echo "
            ";
            // line 76
            if ($this->getAttribute(($context["page"] ?? null), "contact_email", array())) {
                // line 77
                echo "              ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "contact_email", array()), "html", null, true));
                echo "
            ";
            }
            // line 79
            echo "
            <!-- Start: Social media icons -->

            ";
            // line 82
            if (($context["show_social_icon"] ?? null)) {
                // line 83
                echo "              <div class=\"social-media\">
                ";
                // line 84
                if (($context["facebook_url"] ?? null)) {
                    // line 85
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["facebook_url"] ?? null), "html", null, true));
                    echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fa fa-facebook\"></i></a>
                ";
                }
                // line 87
                echo "                ";
                if (($context["google_plus_url"] ?? null)) {
                    // line 88
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["google_plus_url"] ?? null), "html", null, true));
                    echo "\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fa fa-google-plus\"></i></a>
                ";
                }
                // line 90
                echo "                ";
                if (($context["twitter_url"] ?? null)) {
                    // line 91
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["twitter_url"] ?? null), "html", null, true));
                    echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fa fa-twitter\"></i></a>
                ";
                }
                // line 93
                echo "                ";
                if (($context["linkedin_url"] ?? null)) {
                    // line 94
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["linkedin_url"] ?? null), "html", null, true));
                    echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>
                ";
                }
                // line 96
                echo "                ";
                if (($context["pinterest_url"] ?? null)) {
                    // line 97
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["pinterest_url"] ?? null), "html", null, true));
                    echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fa fa-pinterest\"></i></a>
                ";
                }
                // line 99
                echo "                ";
                if (($context["rss_url"] ?? null)) {
                    // line 100
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["rss_url"] ?? null), "html", null, true));
                    echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
                ";
                }
                // line 102
                echo "              </div>
            ";
            }
            // line 104
            echo "
            <!-- End: Social media icons -->

          </div>

        </div>

        <!-- End: Contact Phone & Email -->

        <!-- Start: Top menu -->

        ";
            // line 115
            if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
                // line 116
                echo "          <div class=\"col-sm-3\">
            ";
                // line 117
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
                echo "
          </div>
        ";
            }
            // line 120
            echo "
        <!-- End: Top menu -->

      </div>
    </div>
  </div>
";
        }
        // line 127
        echo "

<header class=\"main-header\">
  <nav class=\"navbar topnav navbar-default\" role=\"navigation\">
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Header -->

        <div class=\"navbar-header col-md-3\">
          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
            <span class=\"sr-only\">Toggle navigation</span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
          </button>
          ";
        // line 143
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 144
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
          ";
        }
        // line 146
        echo "        </div>

        <!-- End: Header -->

        <!-- Start: Header Ads -->

        ";
        // line 152
        if ($this->getAttribute(($context["page"] ?? null), "header_ads", array())) {
            // line 153
            echo "          <div class=\"col-md-9\">
            ";
            // line 154
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header_ads", array()), "html", null, true));
            echo "
          </div>
        ";
        }
        // line 157
        echo "
        <!-- End: Header Ads -->

        </div>
      </div>
    </nav>
</header>


<!-- End: Main menu -->

";
        // line 168
        if ($this->getAttribute(($context["page"] ?? null), "primary_menu", array())) {
            // line 169
            echo "  <div class=\"main-menu\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 173
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "primary_menu", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  </div>
";
        }
        // line 179
        echo "
<!-- End: Main menu -->


<!-- Start: Top widget -->

";
        // line 185
        if ((($context["is_front"] ?? null) && (($this->getAttribute(($context["page"] ?? null), "topwidget_first", array()) || $this->getAttribute(($context["page"] ?? null), "topwidget_second", array())) || $this->getAttribute(($context["page"] ?? null), "topwidget_third", array())))) {
            // line 186
            echo "  <div class=\"parallax-widget- zero\" id=\"about\">
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInDown\">

        ";
            // line 190
            if ((($context["is_front"] ?? null) && (($this->getAttribute(($context["page"] ?? null), "topwidget_first", array()) || $this->getAttribute(($context["page"] ?? null), "topwidget_second", array())) || $this->getAttribute(($context["page"] ?? null), "topwidget_third", array())))) {
                // line 191
                echo "          <div class=\"row clearfix topwidget\">

            <!-- Start: Top widget first -->          
            ";
                // line 194
                if ($this->getAttribute(($context["page"] ?? null), "topwidget_first", array())) {
                    // line 195
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_class"] ?? null), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_first", array()), "html", null, true));
                    echo "</div>
            ";
                }
                // line 196
                echo "          
            <!-- End: Top widget first --> 

            <!-- Start: Top widget second -->          
            ";
                // line 200
                if ($this->getAttribute(($context["page"] ?? null), "topwidget_second", array())) {
                    // line 201
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_class"] ?? null), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_second", array()), "html", null, true));
                    echo "</div>
            ";
                }
                // line 202
                echo "          
            <!-- End: Top widget second --> 
            
            <!-- Start: Top widget third -->         
            ";
                // line 206
                if ($this->getAttribute(($context["page"] ?? null), "topwidget_third", array())) {
                    // line 207
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_third_class"] ?? null), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_third", array()), "html", null, true));
                    echo "</div>
            ";
                }
                // line 208
                echo "          
            <!-- End: Top widget third -->

          </div>
        ";
            }
            // line 213
            echo "
      </div>
    </div>
  </div>
";
        }
        // line 218
        echo "
<!--End: Top widget -->


<!-- Start: Main content -->
<div class=\"parallax-widget- one\">
  <div class=\"parallax-region- wow- bounceInDown\">
    
    <!--Start: Highlighted -->

    ";
        // line 228
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", array())) {
            // line 229
            echo "      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            ";
            // line 232
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", array()), "html", null, true));
            echo "
          </div>
        </div>
      </div>
    ";
        }
        // line 237
        echo "
    <!--End: Highlighted -->

    <!--Start: Title -->

    ";
        // line 242
        if (($this->getAttribute(($context["page"] ?? null), "page_title", array()) &&  !($context["is_front"] ?? null))) {
            // line 243
            echo "      <div id=\"page-title\">
        <div id=\"page-title-inner\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md-12\">
                ";
            // line 248
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "page_title", array()), "html", null, true));
            echo "
              </div>
            </div>
          </div>
        </div>
      </div>
    ";
        }
        // line 255
        echo "
    <!--End: Title -->

    <div class=\"container\">
      <div class=\"parallax-region\">

        <!--Start: Breadcrumb -->

        ";
        // line 263
        if ( !($context["is_front"] ?? null)) {
            // line 264
            echo "          <div class=\"row\">
            <div class=\"col-md-12\">";
            // line 265
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "breadcrumb", array()), "html", null, true));
            echo "</div>
          </div>
        ";
        }
        // line 268
        echo "
        <!--End: Breadcrumb -->

        <div class=\"row layout\">

          <!--Start: Sidebar -->

          ";
        // line 275
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 276
            echo "            <div class=\"sidebar\">
              <div class=";
            // line 277
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarfirst"] ?? null), "html", null, true));
            echo "> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo " </div>
            </div>
          ";
        }
        // line 280
        echo "
          <!--End: Sidebar -->

          <!--End: Content -->

          ";
        // line 285
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 286
            echo "
            <div class=\"content_layout\">

              <div class=";
            // line 289
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["contentlayout"] ?? null), "html", null, true));
            echo "> 

                <!-- Start: Slider -->

                ";
            // line 293
            if ((($context["is_front"] ?? null) && ($context["show_slideshow"] ?? null))) {
                // line 294
                echo "                  <div class=\"flexslider wow- bounceInUp\">
                    <ul class=\"slides\">
                      ";
                // line 296
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["slider_content"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["slider_contents"]) {
                    // line 297
                    echo "                        ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["slider_contents"]));
                    echo "
                      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slider_contents'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 299
                echo "                    </ul>
                  </div>
                ";
            }
            // line 302
            echo "
                <!-- End: Slider -->

                <!-- Start: Home page message -->

                ";
            // line 307
            if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()))) {
                // line 308
                echo "                  ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()), "html", null, true));
                echo "
                ";
            }
            // line 310
            echo "
                <!--End: Home page message -->

                ";
            // line 313
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
            echo " 

              </div>

            </div>

          ";
        }
        // line 320
        echo "
          <!--End: Content -->

          <!--Start: Sidebar -->

          ";
        // line 325
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
            // line 326
            echo "
            <div class=\"sidebar\">
              <div class=";
            // line 328
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarsecond"] ?? null), "html", null, true));
            echo "> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo " </div>
            </div>
            
          ";
        }
        // line 332
        echo "
          <!--End: Sidebar -->

        </div>
      </div>
    </div>
  </div>
</div>

<!-- End: Main content -->


<!-- Start: Services -->

";
        // line 346
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "services", array()))) {
            // line 347
            echo "
  <div class=\"parallax-widget- two\" id=\"services\">
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInDown\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            ";
            // line 353
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "services", array()), "html", null, true));
            echo "
          </div>
        </div>
      </div>
    </div>
  </div>
";
        }
        // line 360
        echo "
<!--End: Services -->


<!-- Start: Bottom widgets -->

";
        // line 366
        if ((($context["is_front"] ?? null) && ((($this->getAttribute(($context["page"] ?? null), "bottom_first", array()) || $this->getAttribute(($context["page"] ?? null), "bottom_second", array())) || $this->getAttribute(($context["page"] ?? null), "bottom_third", array())) || $this->getAttribute(($context["page"] ?? null), "bottom_forth", array())))) {
            // line 367
            echo "  <div class=\"parallax-widget- four\" id=\"products\">    
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInDown\">
        <div class=\"row\">

          <!-- Start: Bottom First -->          
          ";
            // line 373
            if ($this->getAttribute(($context["page"] ?? null), "bottom_first", array())) {
                // line 374
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 375
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_first", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 377
            echo "          
          <!-- End: Bottom First -->

          <!-- Start: Bottom Second -->
          ";
            // line 381
            if ($this->getAttribute(($context["page"] ?? null), "bottom_second", array())) {
                // line 382
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 383
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_second", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 385
            echo "          
          <!-- End: Bottom Second -->

          <!-- Start: Bottom third -->          
          ";
            // line 389
            if ($this->getAttribute(($context["page"] ?? null), "bottom_third", array())) {
                // line 390
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 391
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_third", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 393
            echo "          
          <!-- End: Bottom Third -->

          <!-- Start: Bottom Forth -->
          ";
            // line 397
            if ($this->getAttribute(($context["page"] ?? null), "bottom_forth", array())) {
                // line 398
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 399
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_forth", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 402
            echo "          <!-- End: Bottom Forth -->

        </div>
      </div>
    </div>
  </div>
";
        }
        // line 409
        echo "
<!--End: Bottom widgets -->


<!-- Start: Footer widgets -->

";
        // line 415
        if ((($context["is_front"] ?? null) && (($this->getAttribute(($context["page"] ?? null), "footer_first", array()) || $this->getAttribute(($context["page"] ?? null), "footer_second", array())) || $this->getAttribute(($context["page"] ?? null), "footer_third", array())))) {
            // line 416
            echo "  <div class=\"parallax-widget- six\" id=\"footer\">
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInUp\">  
        <div class=\"row\">

          <!-- Start: Footer First -->
          ";
            // line 422
            if ($this->getAttribute(($context["page"] ?? null), "footer_first", array())) {
                // line 423
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_first_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 424
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_first", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 427
            echo "          <!-- End: Footer First -->

          <!-- Start :Footer Second -->
          ";
            // line 430
            if ($this->getAttribute(($context["page"] ?? null), "footer_second", array())) {
                // line 431
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 432
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_second", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 435
            echo "          <!-- End: Footer Second -->

          <!-- Start: Footer third -->
          ";
            // line 438
            if ($this->getAttribute(($context["page"] ?? null), "footer_third", array())) {
                // line 439
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 440
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_third", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 443
            echo "          <!-- End: Footer Third -->

        </div>
      </div>
    </div>
  </div>
";
        }
        // line 450
        echo "
<!--End: Footer widgets -->


<!-- Start: Clients -->

";
        // line 456
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "clients", array()))) {
            // line 457
            echo "  <div class=\"parallax-widget- three\" id=\"clients\">
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInDown\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            ";
            // line 462
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "clients", array()), "html", null, true));
            echo "
          </div>
        </div>
      </div>
    </div>
  </div>
";
        }
        // line 469
        echo "
<!--End: Clients -->


<!-- Start: Map -->

";
        // line 475
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "google_map", array()))) {
            // line 476
            echo "  <div class=\"map-and-address\">
    <div class=\"google_map\">";
            // line 477
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "google_map", array()), "html", null, true));
            echo "</div>
  </div>
";
        }
        // line 480
        echo "
<!--End: Map -->


<!-- Start: Copyright -->
<div class=\"copyright\">
  <div class=\"container\">
    <div class=\"row\">

      <!-- Start: Copyright -->
      <div class=\"col-sm-6\">
        <p>Copyright © ";
        // line 491
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true));
        echo ". All rights reserved.</p>
      </div>
      <!-- End: Copyright -->

      <!-- Start: Credit link -->
      ";
        // line 496
        if (($context["show_credit_link"] ?? null)) {
            // line 497
            echo "        <div class=\"col-sm-6\">
          <p class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
        </div>
      ";
        }
        // line 501
        echo "      <!-- End: Credit link -->
      
    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/news_zymphonies_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  810 => 501,  804 => 497,  802 => 496,  794 => 491,  781 => 480,  775 => 477,  772 => 476,  770 => 475,  762 => 469,  752 => 462,  745 => 457,  743 => 456,  735 => 450,  726 => 443,  720 => 440,  715 => 439,  713 => 438,  708 => 435,  702 => 432,  697 => 431,  695 => 430,  690 => 427,  684 => 424,  679 => 423,  677 => 422,  669 => 416,  667 => 415,  659 => 409,  650 => 402,  644 => 399,  639 => 398,  637 => 397,  631 => 393,  625 => 391,  620 => 390,  618 => 389,  612 => 385,  606 => 383,  601 => 382,  599 => 381,  593 => 377,  587 => 375,  582 => 374,  580 => 373,  572 => 367,  570 => 366,  562 => 360,  552 => 353,  544 => 347,  542 => 346,  526 => 332,  517 => 328,  513 => 326,  511 => 325,  504 => 320,  494 => 313,  489 => 310,  483 => 308,  481 => 307,  474 => 302,  469 => 299,  460 => 297,  456 => 296,  452 => 294,  450 => 293,  443 => 289,  438 => 286,  436 => 285,  429 => 280,  421 => 277,  418 => 276,  416 => 275,  407 => 268,  401 => 265,  398 => 264,  396 => 263,  386 => 255,  376 => 248,  369 => 243,  367 => 242,  360 => 237,  352 => 232,  347 => 229,  345 => 228,  333 => 218,  326 => 213,  319 => 208,  311 => 207,  309 => 206,  303 => 202,  295 => 201,  293 => 200,  287 => 196,  279 => 195,  277 => 194,  272 => 191,  270 => 190,  264 => 186,  262 => 185,  254 => 179,  245 => 173,  239 => 169,  237 => 168,  224 => 157,  218 => 154,  215 => 153,  213 => 152,  205 => 146,  199 => 144,  197 => 143,  179 => 127,  170 => 120,  164 => 117,  161 => 116,  159 => 115,  146 => 104,  142 => 102,  136 => 100,  133 => 99,  127 => 97,  124 => 96,  118 => 94,  115 => 93,  109 => 91,  106 => 90,  100 => 88,  97 => 87,  91 => 85,  89 => 84,  86 => 83,  84 => 82,  79 => 79,  73 => 77,  71 => 76,  68 => 75,  62 => 73,  60 => 72,  49 => 63,  47 => 62,  43 => 60,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/news_zymphonies_theme/templates/layout/page.html.twig", "/home/mxubgpot/public_html/themes/news_zymphonies_theme/templates/layout/page.html.twig");
    }
}
