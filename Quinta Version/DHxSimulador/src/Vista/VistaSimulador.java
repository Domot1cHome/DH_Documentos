
package Vista;  

import Controlador.ControladorSimulador;


public class VistaSimulador extends javax.swing.JFrame {

    private ControladorSimulador controlador;

    public VistaSimulador() {

        initComponents();

        setFocusable(rootPaneCheckingEnabled);
        controlador = new ControladorSimulador(luz, camara, aire, ventilador, oscuro);
        controlador.start();

    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        oscuro = new javax.swing.JToggleButton();
        aire = new javax.swing.JToggleButton();
        ventilador = new javax.swing.JToggleButton();
        camara = new javax.swing.JToggleButton();
        luz = new javax.swing.JToggleButton();
        fondo = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        oscuro.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/oscuro.png"))); // NOI18N
        oscuro.setContentAreaFilled(false);
        jPanel1.add(oscuro, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, -7, 700, 460));

        aire.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/aireOff.png"))); // NOI18N
        aire.setContentAreaFilled(false);
        jPanel1.add(aire, new org.netbeans.lib.awtextra.AbsoluteConstraints(300, 110, 110, 80));

        ventilador.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/ventiladorOff.png"))); // NOI18N
        ventilador.setContentAreaFilled(false);
        ventilador.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ventiladorActionPerformed(evt);
            }
        });
        jPanel1.add(ventilador, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 330, -1, -1));

        camara.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/camaraOn.png"))); // NOI18N
        camara.setContentAreaFilled(false);
        jPanel1.add(camara, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 0, 500, 30));

        luz.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/luzOff.png"))); // NOI18N
        luz.setContentAreaFilled(false);
        luz.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                luzActionPerformed(evt);
            }
        });
        jPanel1.add(luz, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, -20, -1, 130));

        fondo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Img/modelo.png"))); // NOI18N
        jPanel1.add(fondo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 700, -1));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 694, Short.MAX_VALUE)
                .addGap(0, 0, 0))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 440, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void luzActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_luzActionPerformed

    }//GEN-LAST:event_luzActionPerformed

    private void ventiladorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ventiladorActionPerformed

    }//GEN-LAST:event_ventiladorActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(VistaSimulador.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(VistaSimulador.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(VistaSimulador.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(VistaSimulador.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new VistaSimulador().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JToggleButton aire;
    private javax.swing.JToggleButton camara;
    private javax.swing.JLabel fondo;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JToggleButton luz;
    private javax.swing.JToggleButton oscuro;
    private javax.swing.JToggleButton ventilador;
    // End of variables declaration//GEN-END:variables
}